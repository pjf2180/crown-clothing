const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');
var admin = require('firebase-admin');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
};
const timestamp = require('firebase-admin').firestore.Timestamp
var serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT);
const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://dev-crwn-clothing.firebaseio.com"
});
const firestore = firebaseApp.firestore();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(compression());



app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(enforce.HTTPS({ trustProtoHeader: true }));
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => {
        console.log('Hello world server');
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    })
}

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve('__dirname', '..', 'build', 'service-worker.js'))
});

app.listen(port, (error) => {
    if (error) throw error;
    console.log(`Listening on port ${port}`);
});

app.post('/payment', async (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };
    const { itemsAsIds } = req.body;

    stripe.charges.create(body, async (stripeErr, stripeResp) => {
        if (stripeErr) {
            res.status(500).send({ error: stripeErr })
        } else { //successfully create stripe charge

            let order = {
                createdAt: timestamp.now(),
                items: itemsAsIds,
                total: body.amount / 100
            }
            if (req.body.userId) { order.userId = req.body.userId }
            try {
                //register order on firebase
                await firestore.collection('orders').add(order);
            } catch (error) {
                console.error(error);
                res.send({ success: stripeResp })
            }

        }
    });
});

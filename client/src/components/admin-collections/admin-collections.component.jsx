import React from 'react';
import './admin-collections.styles.scss';
import CollectionCard from '../collection-card/collection-card.component';
import WithSpinner from '../with-spinner/with-spinner.component';
import { withRouter } from 'react-router-dom';
import ChartCanvas from '../chart-canvas/chart-canvas.component';
import CardContent from '../card-content/card-content.component'
const ChartComponent = CardContent(ChartCanvas);

export function AdminCollections({ collections, history, match }) {
    
    const onCollectionSelected = (collectionId) => {
        history.push(`${match.path}/${collectionId}`);
    }
    return <React.Fragment>
        <ChartComponent heading={'Daily visitors'} chartId={'dailyVisitors'}/>
        <div className="admin-collection__grid">
            {
                collections.map((c) =>
                    <CollectionCard key={c.collectionId} {...c} onDetailsClick={onCollectionSelected} />)
            }
        </div>
    </React.Fragment>
}
export default withRouter(WithSpinner(AdminCollections));
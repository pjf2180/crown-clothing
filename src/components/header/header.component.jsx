import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

const Header = ({ currentUser, hiddenCart }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">Shop</Link>
                <Link className="option" to="/shop">Contact</Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>Sign out</div>
                        :
                        <Link className="option" to="/signIn">Sign In</Link>

                }
                <CartIcon></CartIcon>
            </div>
            {
                hiddenCart ? null : <CartDropdown></CartDropdown>
            }

        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hiddenCart: selectCartHidden
});
export default connect(mapStateToProps)(Header);
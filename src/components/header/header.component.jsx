import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
const Header = ({ currentUser, hiddenCart }) => {
    return (
        <HeaderContainer>
            <LogoContainer className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink className="option" to="/shop">Shop</OptionLink>
                <OptionLink className="option" to="/shop">Contact</OptionLink>
                {currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()}>Sign out</OptionLink>
                        :
                        <OptionLink className="option" to="/signIn">Sign In</OptionLink>
                }
                <CartIcon></CartIcon>
            </OptionsContainer>
            {
                hiddenCart ? null : <CartDropdown></CartDropdown>
            }

        </HeaderContainer>
    )
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hiddenCart: selectCartHidden
});
export default connect(mapStateToProps)(Header);
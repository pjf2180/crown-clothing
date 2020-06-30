import React from 'react';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions'

const Header = ({ currentUser, hiddenCart, signOut }) => {

    return (
        <HeaderContainer>
            <LogoContainer className="logo-container" to="/">
                <Logo className="logo"></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink className="option" to="/shop">Shop</OptionLink>
                <OptionLink className="option" to="/shop">Contact</OptionLink>
                {currentUser ?
                    <OptionLink as='div' onClick={signOut}>Sign out</OptionLink>
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
const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
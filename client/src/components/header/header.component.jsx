import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles';

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

export default Header;
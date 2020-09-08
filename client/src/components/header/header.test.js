import { shallow } from 'enzyme'
import React from 'react'
import { Router } from 'react-router-dom'
import Header from './header.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import { OptionLink } from './header.styles'

describe('Header Component', () => {

    it('Sign out button rendered with user', () => {
        //Arrange
        const user = {
            name: 'Any user',
            email: ''
        }
        const optionLinkText = 'Sign out';
        //Act
        const wrapper = shallow(<Header currentUser={user} />);

        const signOutOptLink = wrapper
            .find(OptionLink)
            .findWhere(l => l.text() === optionLinkText);
        //Assert
        expect(signOutOptLink.exists()).toBe(true);
    })

    it('Sign in button rendered with null user', () => {
        //Arrange
        const user = null;
        const optionLinkText = 'Sign In';
        //Act
        const wrapper = shallow(<Header currentUser={user} />);

        const signOutOptLink = wrapper
            .find(OptionLink)
            .findWhere(l => l.text() === optionLinkText);
        //Assert
        expect(signOutOptLink.exists()).toBe(true);
    })

    it('Cart dropdown rendered', () => {
        //Arrange
        const hiddenCart = false;
        //Act
        const wrapper = shallow(<Header hiddenCart={hiddenCart} />);
        const dropdownToBeShown = wrapper.find(CartDropdown).exists();
        //Assert
        expect(dropdownToBeShown).toEqual(true);
    })
    it('Cart dropdown hidden', () => {
        //Arrange
        const hiddenCart = true;
        //Act
        const wrapper = shallow(<Header hiddenCart={hiddenCart} />);
        const dropdownToBeShown = wrapper.find(CartDropdown).exists();
        //Assert
        expect(dropdownToBeShown).toEqual(false);
    })
    it('Sign out called on click', () => {
        //Arrange
        const signOut = jest.fn();
        const user = {
            name: 'Any user',
            email: ''
        }
        const optionLinkText = 'Sign out';

        //Act
        const wrapper = shallow(<Header currentUser={user} signOut={signOut} />);
        const signOutOptLink = wrapper
            .find(OptionLink)
            .findWhere(l => l.text() === optionLinkText)
            .first();
        signOutOptLink.simulate('click');

        //Assert
        expect(signOut).toBeCalled();
    })
})

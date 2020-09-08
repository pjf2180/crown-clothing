import React from 'react';
import { shallow } from 'enzyme'
import StripeButton from './stripe-button.component';

describe('<StripeButton />', () => {

    it('renders without crashing', () => {
        const stripeBtn = shallow(<StripeButton />);
        expect(stripeBtn).toBeTruthy();
    });

}); 

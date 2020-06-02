import React from 'react';
import ReactDOM from 'react-dom';
import StripeButton from './StripeButton';

describe('<StripeButton />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StripeButton />, div);
  });
});

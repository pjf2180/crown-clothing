import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './loading-spinner.styles'

const LoadingSpinner = () => (
    <SpinnerOverlay>
        <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
);
export default LoadingSpinner;
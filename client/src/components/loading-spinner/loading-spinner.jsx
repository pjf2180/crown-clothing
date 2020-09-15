import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './loading-spinner.styles'

const LoadingSpinner = ({ fitOnContainer = false }) => (
    <SpinnerOverlay fitOnContainer={fitOnContainer}>
        <SpinnerContainer fitOnContainer={fitOnContainer}></SpinnerContainer>
    </SpinnerOverlay>
);
export default LoadingSpinner;
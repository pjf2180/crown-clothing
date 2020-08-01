import React from 'react'
import LoadingSpinner from '../loading-spinner/loading-spinner'

const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <LoadingSpinner />
        ) : <WrappedComponent {...otherProps} />
    }
    return Spinner;
}

export default WithSpinner;



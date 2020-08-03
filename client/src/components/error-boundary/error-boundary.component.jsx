import React from 'react'
import { ErrorImageContainer, ErrorImageText, ErrorImageOverlay } from './error-boundary.styles'

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hasErrored: false
        }
    }

    static getDerivedStateFromError(error) {
        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
    }

    render() {
        if (this.state.hasErrored) {
            return <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/O0DCcQy.png' />
                <ErrorImageText>Broken Page :(</ErrorImageText>
            </ErrorImageOverlay>

        }
        return this.props.children;
    }
}

export default ErrorBoundary;
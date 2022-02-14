import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("error", error);
        console.error("errorInfo", errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="my-5 text-center">
                    <h4 className="text-danger">Oh no, An error! Something went wrong.</h4>
                    <p className="my-3 fs-5 text-secondary">Please try refreshing the page.</p>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application shell error:", error);
    console.error(errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-app-bg px-4 text-app-text">
          <div className="max-w-xl rounded-2xl border border-app-outline/30 bg-app-surface/80 p-6 text-center shadow-lg">
            <p className="text-overline font-semibold uppercase tracking-[0.08em] text-app-primary">
              Portfolio
            </p>
            <h1 className="mt-3 text-title-xl font-semibold">
              Something went wrong
            </h1>
            <p className="mt-3 text-body text-app-muted">
              The app hit a render error. Reloading usually clears it if this
              was a transient issue.
            </p>
            <button
              type="button"
              onClick={this.handleRetry}
              className="cta-primary mt-6"
            >
              Reload
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

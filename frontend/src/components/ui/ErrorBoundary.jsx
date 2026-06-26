import { Component } from "react";

/**
 * Generic error boundary. Catches render errors in its subtree and shows
 * a fallback UI instead of crashing the whole page.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("[ErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }
      return (
        <div className="flex min-h-[120px] items-center justify-center rounded-xl border border-app-outline/25 bg-app-surface/60 p-6 text-center text-body text-app-muted">
          Something went wrong. Please refresh the page.
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

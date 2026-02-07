import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      timestamp: null,
      route: window.location.pathname,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
      timestamp: new Date().toLocaleString(),
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error("Application Crash:", error, errorInfo);
  }

  handleReload = () => window.location.reload();
  goHome = () => (window.location.href = "/");

  copyError = () => {
    const { error, errorInfo, route, timestamp } = this.state;

    const debugText = `
=== APPLICATION ERROR REPORT ===

Time: ${timestamp}
Route: ${route}

Message:
${error?.toString()}

Stack:
${error?.stack}

Component Stack:
${errorInfo?.componentStack}
`;
    navigator.clipboard.writeText(debugText);
    alert("Error details copied to clipboard");
  };

  // Extract the main error line from stack
  getMainErrorLine = () => {
    const stack = this.state.error?.stack;
    if (!stack) return null;

    const lines = stack.split("\n");
    return lines[1] || lines[0];
  };

  render() {
    if (this.state.hasError) {
      const isDev =
        import.meta?.env?.DEV || process.env.NODE_ENV === "development";

      const mainErrorLine = this.getMainErrorLine();

      return (
        <div className="min-h-screen  flex items-center justify-center bg-[#0d1117] text-white px-6">
          <div className="w-full max-w-6xl bg-[#161b22] border border-white/10 rounded-2xl shadow-2xl p-10 relative">

            <h1 className="text-5xl font-bold text-red-400 mb-2">500</h1>
            <h2 className="text-2xl mb-4">Unexpected Application Error</h2>

            <p className="text-white/70 mb-6">
              Something went wrong while rendering this page.
            </p>

            {/* Highlighted Main Error */}
            {mainErrorLine && isDev && (
              <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/40">
                <p className="text-red-300 font-semibold mb-1">
                  🔍 Root Cause
                </p>
                <pre className="text-red-200 whitespace-pre-wrap break-words">
                  {mainErrorLine}
                </pre>
              </div>
            )}

            <div className="flex gap-4 mb-8 flex-wrap">
              <button
                onClick={this.handleReload}
                className="px-6 py-3 border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-black transition"
              >
                Reload
              </button>

              <button
                onClick={this.goHome}
                className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
              >
                Homepage
              </button>

              {isDev && (
                <button
                  onClick={this.copyError}
                  className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400 hover:text-black transition"
                >
                  Copy Error
                </button>
              )}
            </div>

            {/* Developer Debug Panel */}
            {isDev && (
              <div className="bg-black/40 border border-white/10 p-4 rounded-lg text-sm overflow-auto max-h-[350px]">
                <p className="text-yellow-200 mb-2 font-semibold">
                  Debug Information
                </p>

                <p><strong>Time:</strong> {this.state.timestamp}</p>
                <p><strong>Route:</strong> {this.state.route}</p>

                <pre className="mt-3 whitespace-pre-wrap font-bold  text-red-300">
                  {this.state.error?.toString()}
                </pre>

                <pre className="mt-3 whitespace-pre-wrap text-white/80">
                  {this.state.error?.stack}
                </pre>

                <pre className="mt-3 whitespace-pre-wrap text-white/80">
                  {this.state.errorInfo?.componentStack}
                </pre>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

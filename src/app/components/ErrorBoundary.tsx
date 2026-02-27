import { Component, type ReactNode, type ErrorInfo } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackTitle?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[ErrorBoundary] Caught:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[200px] flex items-center justify-center p-8">
          <div className="max-w-md text-center">
            <div className="w-14 h-14 rounded-full bg-[#FFEBEE] flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-7 h-7 text-[#D32F2F]" />
            </div>
            <h2 className="text-[16px] text-[#1C1B1F] mb-2" style={{ fontWeight: 600 }}>
              {this.props.fallbackTitle ?? "Something went wrong"}
            </h2>
            <p className="text-[13px] text-[#79747E] mb-4" style={{ fontWeight: 400 }}>
              {this.state.error?.message ?? "An unexpected error occurred."}
            </p>
            <button
              onClick={this.handleReset}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] bg-[#2962FF] text-white text-[13px] hover:bg-[#1E4BD8] transition-all cursor-pointer"
              style={{ fontWeight: 600 }}
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

import React, { Component, ErrorInfo } from "react";
import styled from "styled-components";
type Props = {
  children: React.ReactNode;
};

type State = {
  hasError: boolean;
};

const TitleError = styled.h1`
  color: red;
  text-align: center;
`;

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }
  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <TitleError>Something went wrong!.</TitleError>;
    }

    return this.props.children;
  }
}

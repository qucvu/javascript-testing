import React from "react";
import styled from "styled-components";

type Props = {
  loading: boolean;
  message: string;
};

const StyledLoading = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 10;
  font-weight: 700;
  font-size: 1.5rem;
`;

const LazyLoad = ({ loading, message }: Props) => {
  return loading ? <StyledLoading>{message}</StyledLoading> : null;
};

export default LazyLoad;

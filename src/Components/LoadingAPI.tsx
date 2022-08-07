import styled from "styled-components";

const LoadingItem = styled.div`
  border: 1rem solid #0042a4;
  border-radius: 50%;
  border-top: 1rem solid #3775cf;
  border-right: 1rem solid #619bee;
  border-bottom: 1rem solid #96bff9;
  border-left: 1rem solid #c9e0ff;
  margin: 0 auto;
  width: 5rem;
  height: 5rem;
  -webkit-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return <LoadingItem />;
};

export default Loading;

import styled from "styled-components";
type Props = {};
const Error = styled.div`
  text-align: center;
`;
const ErrorAPI = (props: Props) => {
  return (
    <Error>
      <img
        src="https://user-images.githubusercontent.com/6059356/35678833-80566ce6-075d-11e8-9513-cc3d4233f5b1.gif"
        alt="Error"
      />
    </Error>
  );
};

export default ErrorAPI;

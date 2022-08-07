import { MouseEventHandler } from "react";
import styled from "styled-components";
type Props = {
  children: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const StyledButton = styled.button`
  display: inline-block;
  color: #fff;
  background-color: #2db94d;
  border-color: #2db94d;
  color: #000;
  font-weight: 600;
  padding: 0.3rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #23903c;
    border-color: #23903c;
  }
`;

const Button = ({ children, className, ...rest }: Props) => {
  return (
    <StyledButton className={className} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;

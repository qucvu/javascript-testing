import { ReactElement } from "react";

type Props = {
  title: string;
  children: ReactElement | JSX.Element;
};

const Tab = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Tab;

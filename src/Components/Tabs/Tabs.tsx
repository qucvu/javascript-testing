import { ReactElement, useState } from "react";
import styled from "styled-components";
import TabTitle from "./TabTitle";

type Props = {
  children: ReactElement[];
};
const WrappedTitle = styled.ul`
  display: flex;
  justify-content: center;
  font-weight: 700;
  color: #ff3300;
`;

const Tabs = ({ children }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <WrappedTitle>
        {children.map((item, index) => (
          <TabTitle
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        ))}
      </WrappedTitle>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;

import styled from "styled-components";
type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  selectedTab: number;
};

const StyledTitle = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;

  &.active {
    background-color: #fff;

    border: solid #000;
    border-width: 1px 1px 0 1px;
  }
`;

const TabTitle = ({ title, setSelectedTab, index, selectedTab }: Props) => {
  return (
    <StyledTitle
      className={selectedTab === index ? "active" : ""}
      onClick={() => setSelectedTab(index)}
    >
      <p>{title}</p>
    </StyledTitle>
  );
};

export default TabTitle;

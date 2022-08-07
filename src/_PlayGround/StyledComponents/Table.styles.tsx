import { MouseEventHandler } from "react";
import styled from "styled-components";
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
`;

export const Thead = styled.thead`
  font-weight: 700;
`;
export const Tbody = styled.tbody`
  font-weight: 500;
`;
export const Td = styled.td`
  border: solid #000;
  border-width: 0.5px;
  padding: 0.8rem;
`;

export const Th = styled.th`
  cursor: pointer;
  border: solid #000;
  border-width: 0.5px;
  padding: 1rem;
`;

export const TdTitle = styled(Td)`
  text-align: left;
`;

export const Tr = styled.tr``;

export const SortButton = styled.div`
  display: inline-block;
  width: 0;
  height: 0;
  background-color: transparent;
  cursor: pointer;

  &.descending {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-top: 10px solid #000;
  }
  &.ascending {
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    border-bottom: 10px solid black;
  }
`;

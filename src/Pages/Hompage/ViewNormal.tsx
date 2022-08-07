import Button from "Components/Button";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SortButton,
  Table,
  Tbody,
  Td,
  TdTitle,
  Th,
  Thead,
  Tr,
} from "_PlayGround/StyledComponents/Table.styles";
import { Todo } from "../../Interfaces/Todo";

type Props = {
  todoList: Todo[];
};
type SortKey = keyof Todo;
type SortOrder = "descending" | "ascending";

const ViewNormal = ({ todoList }: Props) => {
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState<SortKey>("id");
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascending");

  const sortedTodos = () => {
    if (!sortKey) return todoList;
    const sortedTodos = todoList.sort((current, next) =>
      current[sortKey] > next[sortKey] ? 1 : -1
    );
    if (sortOrder === "descending") return sortedTodos.reverse();
    return todoList;
  };

  const handleSortTodo = (columnKey: keyof Todo) => {
    setSortKey(columnKey);
    setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th onClick={() => handleSortTodo("id")}>
            ID{" "}
            <SortButton
              className={`${
                sortKey === "id" && sortOrder === "ascending"
                  ? "ascending"
                  : "descending"
              }`}
            />
          </Th>
          <Th>User ID</Th>
          <Th onClick={() => handleSortTodo("title")}>
            Title{" "}
            <SortButton
              className={`${
                sortKey === "title" && sortOrder === "descending"
                  ? "descending"
                  : "ascending"
              }`}
            />
          </Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      <Tbody>
        {sortedTodos().map((todo) => (
          <Tr key={todo.id}>
            <Td>{todo.id} </Td>
            <Td>{todo.userId}</Td>
            <TdTitle>{todo.title}</TdTitle>
            <Td>
              <Button onClick={() => navigate(`/details/${todo.id}`)}>
                View details
              </Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default ViewNormal;

import { Todo, TodoByUserId } from "Interfaces/Todo";
import { useEffect, useState } from "react";
import {
  Table,
  Tbody,
  Td,
  TdTitle,
  Th,
  Thead,
  Tr,
} from "_PlayGround/StyledComponents/Table.styles";

type Props = {
  todoList: Todo[];
};

const UserIdGroup = ({ todoList }: Props) => {
  const [todosByUserId, setTodoByUserId] = useState<TodoByUserId[]>([]);
  useEffect(() => {
    const todosByUserId = todoList.reduce(
      (resultTodo: TodoByUserId[], todo) => {
        const indexTodoDuplicate = resultTodo.findIndex(
          (item) => item.userId === todo.userId
        );
        if (indexTodoDuplicate === -1) {
          resultTodo.push({
            userId: todo.userId,
            titles: [
              { id: todo.id, content: todo.title, completed: todo.completed },
            ],
          });
        } else {
          resultTodo[indexTodoDuplicate] = {
            ...resultTodo[indexTodoDuplicate],
            titles: [
              ...resultTodo[indexTodoDuplicate].titles,
              { id: todo.id, content: todo.title, completed: todo.completed },
            ],
          };
        }
        return resultTodo;
      },
      []
    );
    setTodoByUserId(todosByUserId);
  }, [todoList]);
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>User ID</Th>
          <Th>Title</Th>
        </Tr>
      </Thead>
      <Tbody>
        {todosByUserId.map((todo) => (
          <Tr key={todo.userId}>
            <Td>{todo.userId}</Td>
            <TdTitle>
              <ul></ul>

              {todo.titles.map((title) => (
                <li key={title.id}>{title.content}</li>
              ))}
            </TdTitle>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default UserIdGroup;

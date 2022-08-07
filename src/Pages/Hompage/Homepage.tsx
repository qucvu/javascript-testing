import Tab from "Components/Tabs/Tab";
import Tabs from "Components/Tabs/Tabs";
import { useEffect, useState } from "react";
import { Container, Title } from "_PlayGround/StyledComponents/Wrapper.styles";
import { Todo } from "../../Interfaces/Todo";
import todoAPI from "../../Services/todoAPI";
import UserIdGroup from "./UserIdGroup";
import ViewNormal from "./ViewNormal";
type Props = {};

const Homepage = (props: Props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const fetchToDo = async () => {
    try {
      const data = await todoAPI.getTodoList();
      setTodoList(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchToDo();
  }, []);

  return (
    <Container>
      <Title>Home page</Title>
      <Tabs>
        <Tab title="View normal">
          <ViewNormal todoList={todoList} />
        </Tab>
        <Tab title="Group By User ID">
          <UserIdGroup todoList={todoList} />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Homepage;
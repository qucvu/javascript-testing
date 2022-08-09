import ErrorAPI from "Components/ErrorAPI";
import Loading from "Components/LoadingAPI";
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
  const [todoList, setTodoList] = useState<Todo[] | null>(null);
  const [error, setError] = useState(false);
  const fetchToDo = async () => {
    try {
      const data = await todoAPI.getTodoList();
      setTodoList(data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    fetchToDo();
  }, []);

  if (error) {
    return <ErrorAPI />;
  }
  return (
    <Container>
      <Title>Home page</Title>
      {todoList ? (
        <Tabs>
          <Tab title="View normal">
            <ViewNormal todoList={todoList} />
          </Tab>
          <Tab title="Group By User ID">
            <UserIdGroup todoList={todoList} />
          </Tab>
        </Tabs>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Homepage;

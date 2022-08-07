import { Todo } from "Interfaces/Todo";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import todoAPI from "Services/todoAPI";
import { Container, Title } from "_PlayGround/StyledComponents/Wrapper.styles";
import styled from "styled-components";
import Button from "Components/Button";
import Loading from "Components/Loading";
import ErrorAPI from "Components/ErrorAPI";

const CardDetail = styled.div`
  border: 2px solid #ccc;
  max-width: 20rem;
  margin: 0 auto;
  padding: 0.5rem 1rem 0;
  box-shadow: 5px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;
const Paragraph = styled.p`
  margin-bottom: 0.5rem;
`;

const TitleKey = styled.span`
  font-size: 1rem;
  font-weight: 600;
`;

const StyledButton = styled(Button)`
  background-color: #99ccff;
  border-color: #99ccff;
  &:hover {
    background-color: #3399ff;
    border-color: #3399ff;
  }
`;
const DetailPage = () => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [errorDetail, setErrorDetail] = useState(false);
  const { id } = useParams();

  const fetchTodoDetails = async (todoId: string) => {
    try {
      const todo = await todoAPI.getTodoDetail(todoId);
      setTodo(todo);
      setErrorDetail(false);
    } catch (error) {
      setErrorDetail(true);
    }
  };
  useEffect(() => {
    if (id) {
      fetchTodoDetails(id);
    }
  }, [id]);
  if (errorDetail) {
    return <ErrorAPI />;
  }
  return (
    <Container>
      <Title>Details Page</Title>
      <Link to={"/"}>
        <StyledButton>&laquo; Home</StyledButton>
      </Link>
      {todo ? (
        <CardDetail>
          <Paragraph>
            <TitleKey>Status: </TitleKey>
            {todo.completed ? "Completed" : "Not completed"}
          </Paragraph>
          <Paragraph>
            <TitleKey>Id: </TitleKey>
            {todo.id}
          </Paragraph>
          <Paragraph>
            <TitleKey>Title: </TitleKey>
            {todo.title}
          </Paragraph>
          <Paragraph>
            <TitleKey>UserID: </TitleKey>
            {todo.userId}
          </Paragraph>
        </CardDetail>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default DetailPage;

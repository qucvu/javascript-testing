import { Todo } from "Interfaces/Todo";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import todoAPI from "Services/todoAPI";
import { Container, Title } from "_PlayGround/StyledComponents/Wrapper.styles";
import styled from "styled-components";
import Button from "Components/Button";
type Props = {};

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
const DetailPage = (props: Props) => {
  const [todo, setTodo] = useState<Todo | null>(null);
  const { id } = useParams();

  const fetchTodoDetails = async (todoId: string) => {
    try {
      const todo = await todoAPI.getTodoDetail(todoId);
      setTodo(todo);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTodoDetails(id as any);
  }, [id]);
  return (
    <Container>
      <Title>Details Page</Title>
      <Link to={"/"}>
        <StyledButton>&laquo; Home</StyledButton>
      </Link>
      <CardDetail>
        <Paragraph>
          <TitleKey>Status: </TitleKey>
          {todo?.completed ? "Completed" : "Not completed"}
        </Paragraph>
        <Paragraph>
          <TitleKey>Id: </TitleKey>
          {todo?.id}
        </Paragraph>
        <Paragraph>
          <TitleKey>Title: </TitleKey>
          {todo?.title}
        </Paragraph>
        <Paragraph>
          <TitleKey>UserID: </TitleKey>
          {todo?.userId}
        </Paragraph>
      </CardDetail>
    </Container>
  );
};

export default DetailPage;

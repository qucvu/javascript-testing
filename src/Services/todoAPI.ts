import { Todo } from "../Interfaces/Todo";
import axiosClient from "./axiosClients";

const todoAPI = {
  getTodoList: () => {
    return axiosClient.get<Todo[]>("todos");
  },

  getTodoDetail: (todoId: string) => {
    return axiosClient.get<Todo>(`todos/${todoId}`);
  },
};

export default todoAPI;

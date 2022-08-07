export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TitleByUserId {
  id: number;
  content: string;
  completed: boolean;
}

export interface TodoByUserId {
  userId: number;
  titles: TitleByUserId[];
}

interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}

type TodoOmited = Omit<Todo, 'description' | 'completed'>;

const todo1: TodoOmited = {
  title: 'Clean room',
  createdAt: 1615544252770,
};

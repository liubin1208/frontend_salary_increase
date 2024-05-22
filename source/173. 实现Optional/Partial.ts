interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type PartialTodo = Partial<Todo>;

const todo: PartialTodo = {
  title: 'Clean room',
  completed: false,
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo2: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

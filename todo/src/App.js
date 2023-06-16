function App({ $target, initalState }) {
  new Header({
    $target,
    text: 'Simple Todo App',
  });
  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [
        ...todoList.state,
        {
          text,
        },
      ];

      todoList.setState(nextState);
    },
  });

  const todoList = new TodoList({
    $target,
    initalState,
  });
}

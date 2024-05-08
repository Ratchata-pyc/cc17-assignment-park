function TodoItem(props, deleteTodo) {
  const todo = props;
  return (
    <li className="item">
      <input type="checkbox"></input>
      <p className="todo__item">{todo.title}</p>
      <button onClick={deleteTodo}>x</button>
    </li>
  );
}

export default TodoItem;

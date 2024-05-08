import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import TodoItem from "../components/Todoitem";

function ProfilePage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewtodo] = useState("");

  async function getAlltodo() {
    try {
      const response = await axios.get(
        "https://cc17-assessment-api.onrender.com/v1/todo?userId=40"
      );
      console.log(response.data.data);
      setTodos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }
  const createTodo = async () => {
    const data = { title: newTodo, complete: false };
    try {
      let response = await axios.post(
        "https://cc17-assessment-api.onrender.com/v1/todo?userId=40",
        data
      );
      setTodos([response.data, ...todos]);
      setNewtodo("");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (todoId) => {
    console.log("try to delete todoID :", todoId);
    if (!todoId) return;
    try {
      await axios.delete(
        `https://cc17-assessment-api.onrender.com/v1/todo?userId=40/${todoId}`
      );
      console.log("delete success");
      setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangTodo = (event) => {
    setNewtodo(event.target.value);
  };

  return (
    <div className="container__user">
      <div className="title">
        <h1>My Todo</h1>

        <img onClick={getAlltodo} src="src/image/rocket.png" />
      </div>
      <div className="new__task">
        <h6>new task</h6>
        <input
          className="new__task__input"
          value={newTodo}
          onChange={handleChangTodo}
        />
      </div>

      <ul className="item__list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </ul>

      <div className="logout__button">
        <Link className="link" to="/">
          <p>LOG OUT</p>
        </Link>
      </div>
    </div>
  );
}

export default ProfilePage;

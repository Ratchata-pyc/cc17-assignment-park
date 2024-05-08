import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div className="container">
      <div className="title">
        <h1>My Todo</h1>
        <button>Rocket</button>
      </div>
      <div className="new__task">
        <h6>new task</h6>
        <input className="new__task__input"></input>
      </div>

      <ul className="item__list">
        <li className="item">
          <input type="checkbox"></input>
          <p className="todo__item">task item</p>
          <button>x</button>
        </li>

        <li className="item">
          <input type="checkbox"></input>
          <p className="todo__item">task item</p>
          <button>x</button>
        </li>
        <li className="item">
          <input type="checkbox"></input>
          <p className="todo__item">task item</p>
          <button>x</button>
        </li>
      </ul>

      <div className="logout">
        <Link className="link" to="/">
          <p>LOG OUT</p>
        </Link>
      </div>
    </div>
  );
}

export default ProfilePage;

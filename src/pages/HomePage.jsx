import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function HomePage() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUsername = (e) => setUsername(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (username === "ratchata4205@gmail.com" && password === "qwerty") {
      await login(username, password);
      navigate("/profile");
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="container_home">
      <div className="title__home">
        <span>Title+Notes</span>
        <h1>Welcome</h1>
      </div>

      <form className="login" onSubmit={handleSubmitLogin}>
        <label htmlFor="username">username</label>
        <input
          id="username"
          name="username"
          value={username}
          onChange={handleChangeUsername}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChangePassword}
        />

        <div className="login__botton">
          <button type="submit" className="link__login">
            LOG IN
          </button>
        </div>
      </form>
    </div>
  );
}
export default HomePage;

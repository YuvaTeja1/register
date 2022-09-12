//Login Page
import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const { email, password } = data;
  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div>
      <center>
        <h1>LogIn Page</h1>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handler}
            placeholder="email"
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handler}
            placeholder="password"
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};

export default App;

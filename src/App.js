//SignUp Form Page
import React, { useState } from "react";
const App = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "",
    phoneNo: "",
    password: "",
    conforimPassword: ""
  });
  const {
    firstName,
    lastName,
    email,
    type,
    phoneNo,
    password,
    conforimPassword
  } = data;
  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (firstName.length <= 5) {
      alert("The character should be 5");
    } else if (lastName.length <= 5) {
      alert("The character should be 5");
    } else if (password !== conforimPassword) {
      alert("The password is not matching");
    } else {
      console.log(data);
    }
  };
  return (
    <div>
      <center>
        <h1>Register Page</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handler}
            placeholder="First Name"
          />
          <br />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handler}
            placeholder="Last Name"
          />
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handler}
            placeholder="Email"
          />
          <br />
          <input
            type="text"
            name="type"
            value={type}
            onChange={handler}
            placeholder="Type"
          />
          <br />
          <input
            type="number"
            name="phoneNo"
            value={phoneNo}
            onChange={handler}
            placeholder="Phone No"
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
          <input
            type="password"
            name="conforimPassword"
            value={conforimPassword}
            onChange={handler}
            placeholder="conforimPassword"
          />
          <br />
          <input type="submit" name="submit" />
        </form>
      </center>
    </div>
  );
};
export default App;
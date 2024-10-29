import { useState } from "react";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password:"",
  });

  //   let handleNameChange = (event) => {
  //     setFullName(event.target.value)
  //   };
  //   let handleUserNameChange = (event) => {
  //     setUserName(event.target.value)
  //   };
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password:"",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
        &nbsp;
        <input
            name="fullName"
            id="fullName"
            type="text"
            placeholder="Enter your full name"
            onChange={handleInputChange}
            value={formData.fullName}
        /><br /><br />
        <label htmlFor="username">Username</label>
        &nbsp;
        <input
            name="userName"
            id="username"
            type="text"
            placeholder="Enter your User name"
            onChange={handleInputChange}
            value={formData.userName}
        /><br /><br />
        <label htmlFor="password">Password</label>
        &nbsp;
        <input
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleInputChange}
            value={formData.password}
        /><br /><br />
        <button>Submit</button>
    </form>
  );
}

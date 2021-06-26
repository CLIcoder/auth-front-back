import React, { useState } from "react";
import axios from "axios";

// component
import Heading from "../../ui/heading/heading.component";
import Input from "../../ui/Input/input.component";
import Linke from "../../ui/link/link.component";
import Button from "../../ui/button/button.component";
import "./sign-in.style.scss";
//import validation from "./validation";

const SignIn: React.FC = () => {
  const [field, setField] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setField({ ...field, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/login", { ...field })
      .then(({ token }: any) => {
        window.localStorage.setItem("Authorization", token);
        alert("signIn ok!");
      })
      .catch((err) => {
        const password: any = "Password or email not correct try again!";
        setError({ ...error, password });
      });
    // ..push data to server
  };
  return (
    <>
      <form noValidate onSubmit={handleSubmit} className="signin">
        <div className="signin_part1">part 1</div>
        <div className="signin_part2">
          <Linke label="Back To Home" />
          <Heading size="big" label="Login At badcom To See New Product!" />
          <Heading
            size="medium"
            label="🔑For the purpose of shipping regulation, your details are required."
          />
          <Input
            title="Email address"
            type="email"
            name="email"
            placeholder="Enter email address"
            error={error.email ? error.email : false}
            handleChange={handleChange}
          />
          <Input
            type="password"
            name="password"
            title="Create password"
            placeholder="Password"
            error={error.password ? error.password : false}
            handleChange={handleChange}
          />
          <Button type="submit" label="sign In" />
        </div>
      </form>
    </>
  );
};

export default SignIn;

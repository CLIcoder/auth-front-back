import React, { useState } from "react";
import axios from "axios";

// component
import Heading from "../../ui/heading/heading.component";
import Input from "../../ui/Input/input.component";
import Confirm from "../../ui/confirm/confirm.component";
import Linke from "../../ui/link/link.component";
import Button from "../../ui/button/button.component";
import "./sign-up.style.scss";
import validation from "./validation";

const SignUp: React.FC = () => {
  const [field, setField] = useState({
    email: "",
    password: "",
    confirm_password: "",
    confirm: false,
  });
  const [error, setError] = useState({
    email: false,
    password: false,
    confirm_password: false,
    confirm: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "confirm") {
      setField({ ...field, confirm: !field.confirm });
      return;
    }
    setField({ ...field, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToValidate: any = field;
    const error: any = validation(dataToValidate);
    if (!error) {
      axios
        .post("http://localhost:5000/api/users/register", { ...field })
        .then((res) => {
          alert("signUp ok!"); // do something
        });
      return;
    } else {
      setError({ ...error });
    }
  };
  return (
    <>
      <form noValidate onSubmit={handleSubmit} className="signup">
        <div className="signup_part1">part 1</div>
        <div className="signup_part2">
          <Linke label="Back To Home" />
          <Heading size="big" label="Register At Badcom With One Click!" />
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
          <Input
            type="password"
            name="confirm_password"
            title="Repeat password"
            placeholder="Repeat password"
            error={error.password ? error.password : false}
            handleChange={handleChange}
          />
          <Confirm
            label="I agree to terms & conditions"
            name="confirm"
            error={error?.confirm ? error.confirm : false}
            handleChange={handleChange}
          />
          <Button type="submit" label="sign Up" />
        </div>
      </form>
    </>
  );
};

export default SignUp;

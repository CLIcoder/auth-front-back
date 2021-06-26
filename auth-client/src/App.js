import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./global.module.scss";
import SignUp from "./components/sing-up/sign-up.component";
import SignIn from "./components/sign-in/sign-in.component";

const App = () => {
  return (
    <BrowserRouter>
      <SignIn />
      {/**<SignIn /> */}
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import "./sign-in-and-sign-up.style.scss";
import SignIn from "../../Components/sigin-component/sigin.component";
import SignUp from "../../Components/signup/signup.component";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;

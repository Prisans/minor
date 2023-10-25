import React from "react";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="container">
      <div className="img-screen"></div>

      <div className="txt-screen">

        <div className="txt2-container">
          <h1>Login</h1>

          <div className="input-container">
            <input type="text" placeholder="Username" required/>
            <input type="password" placeholder="password" required />
            <button className="btn" >Sign in</button>
          </div>

          <hr />
          <div className="new-user">
          <p>New User?</p>
          <a href="">Create Account</a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUp;

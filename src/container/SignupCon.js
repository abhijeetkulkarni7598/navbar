import React from 'react';
import { useState } from 'react';

const SignUp = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container" style={{ width: "600px", backgroundColor: "rgb(28,27,27)", padding: "20px", color: "white",borderRadius:"20px" }}>
      <div className="d-flex flex-column align-items-center">
        <div className="h4">{action === "Login" ? "Login" : "Sign Up"}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? (
          <div>
          </div>
        ) : (
          <>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Mobile Number" />
            </div>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email Id" />
            </div>
            <div className="mb-3">
              <select className="form-select">
                <option value="" disabled selected>
                  Select Service
                </option>
                <option value="service1">Education Guidance</option>
                <option value="service2">Career Guidance</option>
                <option value="service3">Micro Business Guidance</option>
                <option value="service4">Spiritual Guidance</option>
              </select>
            </div>
          </>
        )}
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="UserName" />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="mb-3">
          Forgot Password?<span className="ml-1">Click Here</span>
        </div>
      )}

      <div className="d-flex justify-content-between">
        <div
          className={action === "Login" ? "btn btn-secondary" : "btn btn-primary"}
          onClick={() => setAction('Sign Up')}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "btn btn-secondary" : "btn btn-primary"}
          onClick={() => setAction('Login')}
        >
          Log In
        </div>
      </div>
    </div>
  );
};

export default SignUp;

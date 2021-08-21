import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./login.css";
import { motion } from "framer-motion";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      window.location.replace("http://localhost:3000/");
    } else {
      setLoading(false);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };

    fetch("http://127.0.0.1:8000/rest-auth/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.key) {
          localStorage.clear();
          localStorage.setItem("token", data.key);
          window.location.replace("http://localhost:3000/");
        } else {
          setUsername("");
          setPassword("");
          localStorage.clear();
          setErrors(true);
        }
      });
  };

  return (
    <div>
      {errors === true && alert("Cannot Login with Provided Credentials!!")}
      {loading === false && (
        <motion.form
          onSubmit={onSubmit}
          className="login-form"
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 0.7,
            type: "spring",
            stiffness: 500,
          }}
        >
          <center>
            <motion.h1
              style={{ fontSize: "86px", color: "#F4B41A" }}
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 1,
                type: "spring",
                stiffness: 500,
              }}
            >
              Login
            </motion.h1>
          </center>
          <div className="login-div">
            <motion.label
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 1.2,
                type: "spring",
                stiffness: 500,
              }}
              htmlFor="username"
              className="login-field"
            >
              Username
            </motion.label>{" "}
            <br />
            <motion.input
              initial={{ x: 8500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 1.3,
                type: "spring",
                stiffness: 500,
              }}
              name="username"
              className="login-input"
              type="text"
              value={username}
              required
              onChange={(e) => setUsername(e.target.value)}
            />{" "}
            <br />
            <motion.label
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 1.5,
                type: "spring",
                stiffness: 500,
              }}
              htmlFor="password"
              className="login-field"
            >
              Password
            </motion.label>{" "}
            <br />
            <motion.input
              initial={{ x: 8500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 1.7,
                type: "spring",
                stiffness: 500,
              }}
              name="password"
              className="login-input"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>{" "}
          <br />
          <center>
            <motion.button
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 1.9,
                type: "spring",
                stiffness: 500,
              }}
              type="submit"
              value="Log in"
              id="authin"
              className="button-login"
            >
              Log IN
            </motion.button>
          </center>
          <motion.p
            initial={{ x: 8500 }}
            animate={{ x: 0 }}
            transition={{
              delay: 2.0,
              type: "spring",
              stiffness: 500,
            }}
            className="signup-login"
          >
            Don't have an account?{" "}
            <Link to="/signup" className="signup-link">
              {" "}
              Signup
            </Link>
          </motion.p>
        </motion.form>
      )}
      <div className="extra-login"></div>
    </div>
  );
};

export default withRouter(Login);

import "./register.scss";
import { useRef, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
    // setUsername(emailRef.current.value);
  };

  const handleFinish = (e) => {
    e.preventDefault();

    setUsername(usernameRef.current.value);
    setPassword(passwordRef.current.value);
  };

  // used useEffect to make sure the state is updated ASAP
  // once we setPassword, useEffect rund sue to dependencies changes and re-renders, Then runs axios
  useEffect(() => {
    if (password) {
      doRegister();
    }
    // doRegister();
  }, [password]);

  const doRegister = async () => {
    try {
      await axios.post("/api/auth/register", { email, username, password });
      navigate("/login");
      console.log("SUccess Post");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
    <Link to="/login" >
          <button className="loginButton">Sign In</button>
    </Link>
        </div>
      </div>

      <div className="container">
          <h1>Unlimited movies, TV shows, and more</h1>
          <h2>Watch anywhere. Cancel anytime</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

        {!email ? (
          <div className="input">
            <input type="email" placeholder="email address" ref={emailRef} />
            <button className="registerButton" onClick={handleStart}>
              Get Started
            </button>
          </div>
        ) : (
          <form className="input">
            <input type="username" placeholder="username" ref={usernameRef} />
            <input type="password" placeholder="password" ref={passwordRef} />
            <Link to="/home" className="login-register">
              <button className="registerButton" onClick={handleFinish}>
                Start
              </button>
            </Link>
          </form>
        )}
        </div>
    </div>
  );
}

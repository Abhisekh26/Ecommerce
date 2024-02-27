import React from "react";
import { useRef } from "react";
import Headerdisplay from "../Headerfolder/Headerdisplay";
import { Ecommerce } from "../../Data/Auth-context";
import { useContext } from "react";

const Login = () => {
  const emailref = useRef();
  const passref = useRef();
  const { setLogin } = useContext(Ecommerce);
  const { login } = useContext(Ecommerce);

  async function verify(event) {
    event.preventDefault();
    const email = emailref.current.value;
    const password = passref.current.value;
    // console.log(email,password)
    emailref.current.value = "";
    passref.current.value = "";
    const data = fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBWAai-YRPJ8fRwGXSB0LiHg1JkaxQv-zo`,
      {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const resposne = await data;
    if (resposne.ok) {
      const result = await resposne.json();
      console.log(result.idToken);
      setLogin(true);
      localStorage.setItem("token",result.idToken)
      window.location.href = "/store";
      console.log(login);
    } else {
      alert("invalid credentials");
    }
  }
  return (
    <>
      <Headerdisplay></Headerdisplay>
      <div className="form-container">
        <form className="form-box">
          <label htmlFor="email">Email:</label>
          <input type="text" ref={emailref} />

          <label htmlFor="password">Password:</label>
          <input type="text" ref={passref} />

          <button type="submit" onClick={verify}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;

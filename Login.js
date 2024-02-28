import React from "react";
import { useRef,useContext } from "react";
import Headerdisplay from "../Headerfolder/Headerdisplay";
import { Ecommerce } from "../../Data/Auth-context";


const Login = () => {
  const emailref = useRef();
  const passref = useRef();
 const authCtx= useContext(Ecommerce)

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
       authCtx.login(result.idToken)
    localStorage.setItem("token",result.idToken)
    
      
     window.location.href = "/home";
      // console.log(login);
      // token1=result.idToken
      // console.log(token1)
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

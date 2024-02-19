import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useRef, useEffect } from "react";
import "./Contact.css";
 function Contact() {
  const [form, setForm] = useState({});
  const nameref = useRef();
  const emailref = useRef();
  const mobileref = useRef();


  async function contactinfo(event){
    event.preventDefault();
  const name = nameref.current.value;
  const email = emailref.current.value;
  const mobile = mobileref.current.value;
  setForm({ Name: name, Email: email, Mobile: mobile });
  nameref.current.value = "";
  emailref.current.value = "";
  mobileref.current.value = "";


  
    const sent = await fetch(
      "https://react-http-f5f7f-default-rtdb.firebaseio.com/contactdetails.json",
      {
        method: "POST",
        body: JSON.stringify({ Name: name, Email: email, Mobile: mobile }),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
  }
  useEffect(() => {
    console.log(form);
  }, [form]);

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to="./" className="nav-link ">
                {" "}
                Home{" "}
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/store" className="nav-link ">
                {" "}
                Store
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/about" className="nav-link ">
                About
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/contact" className="nav-link ">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="form-container">
        <form className="form-box">
          <label htmlFor="name">Name:</label>
          <input type="text" ref={nameref} />

          <label htmlFor="email">Email:</label>
          <input type="email" ref={emailref} />

          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" pattern="[0-9]{10}" ref={mobileref} />

          <button type="submit" onClick={contactinfo}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default Contact;

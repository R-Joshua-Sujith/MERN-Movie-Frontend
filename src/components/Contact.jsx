import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./styles/Contact.css";

const Contact = () => {
  const [from_name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const queryHandler = (event) => {
    setQuery(event.target.value);
  };
  const submitHandler = () => {
    if (from_name == "" || email == "" || query == "") {
      alert("Please Fill all the fields");
    } else {
      emailjs.send(
        "service_125o7n8",
        "template_c5u0zgq",
        {
          from_name: from_name,
          to_name: "Joshua",
          from_email: email,
          to_email: "rjoshuasujith@gmail.com",
          message: query,
        },
        "b7-7fic01tSVx8u1H"
      );
      alert(`We will reach out to you soon `);
      setName("");
      setEmail("");
      setQuery("");
    }
  };
  return (
    <div>
      <h1 className="headingg">Contact Us</h1>
      <div className="contact">
        <input
          type="text"
          placeholder="Enter your name"
          value={from_name}
          onChange={nameHandler}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={emailHandler}
        />
        <textarea
          name=""
          id=""
          cols="30"
          rows="8"
          placeholder="Enter your query"
          value={query}
          onChange={queryHandler}
        ></textarea>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
};

export default Contact;

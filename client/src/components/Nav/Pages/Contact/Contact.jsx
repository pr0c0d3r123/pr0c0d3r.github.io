// TODO CONTACT FORM NEEDS TO SEND DATA TO "n4168460@gmail.com"

import { Link } from "react-router-dom";
import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  function getName(e) {
    setName(e.target.value);
  }

  function getEmail(e) {
    setEmail(e.target.value);
  }

  function getDesc(e) {
    setDesc(e.target.value);
  }

  function handleSubmit() {
    console.log(name);
    console.log(email);
    console.log(desc);
  }

  return (
    <div className="center">
      <form className="contact">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          onSubmit={getName}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          onSubmit={getEmail}
        />
        <textarea
          name="desc"
          cols="50"
          rows="50"
          defaultValue="Your description"
          onSubmit={getDesc}
        ></textarea>
        <Link
          className="btn"
          to={`mailto:n4168460@gmail.com?subject=Sender name: ${name}; Sender address: ${email}&body=${desc}`}
          onClick={handleSubmit}
        >
          Submit
        </Link>
      </form>
    </div>
  );
};

export default Contact;

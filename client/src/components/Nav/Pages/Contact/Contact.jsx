import "./contact.css";

const Contact = () => {
  return (
    <div className="center">
      <form className="contact">
        <input type="text" name="name" placeholder="Your name" />
        <input type="email" name="email" placeholder="Your email" />
        <textarea name="desc" cols="50" rows="50"></textarea>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

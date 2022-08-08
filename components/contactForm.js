import React from "react";
import emailjs from "emailjs-com";

const contactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_pw7ikdr",
        "template_l3b9muk",
        form.current,
        "ERYKK7SBsFeB0FaTo"
      )
      .then(
        (result) => {
          console.log("result : ", result.text);
          message.success("Send Email Success!");
        },
        (error) => {
          console.log(error.text);
          message.error("Send Email Error!");
        }
      );
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default contactForm;

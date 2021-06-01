import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import Form from "../index.jsx";

class ContactForm extends Form {
  state = {
    data: { name: "", email: "", message: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    message: Joi.string().required().label("Message"),
  };

  doSubmit = async () => {
    const { data } = this.state;
    // console.log(data);
  };

  render() {
    return (
      <div>
        <h3 className="d-lg-none">Send us a message</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Your Name")}
          {this.renderInput("email", "Email Address", "email")}
          {this.renderTextArea("message", "Message")}
          {this.renderButton("Send")}
        </form>
      </div>
    );
  }
}

export default ContactForm;

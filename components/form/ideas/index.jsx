import React, { useState, useEffect } from "react";
import Joi from "joi-browser";
import Form from "../index.js.jsx";

class IdeaForm extends Form {
  state = {
    data: {
      name: "",
      email: "",
      idea: "",
      sector: "",
      innovationHighlight: "",
      requiredFunding: "",
    },
    errors: {},
  };

  schema = {
    name: Joi.string().required().label("Name"),
    email: Joi.string().email().required().label("Email"),
    idea: Joi.string().required().label("Idea Description"),
    sector: Joi.string().required().label("Sector"),
    innovationHighlight: Joi.string().required().label("Innovation Highlight"),
    requiredFunding: Joi.string().required().label("Required Funding"),
  };

  doSubmit = async () => {
    const { data } = this.state;
    console.log(data);
  };

  render() {
    return (
      <div>
        <h3 className="d-lg-none">Send us a message</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Your Name")}
          {this.renderInput("email", "Email Address", "email")}
          {this.renderTextArea("idea", "Idea Description")}
          {this.renderInput("sector", "Sector")}
          {this.renderInput("innovationHighlight", "Innovation Highlight")}
          {this.renderInput("requiredFunding", `Required Funding (in Dollars)`, "number")}
          {this.renderButton("Share Your Idea")}
        </form>
      </div>
    );
  }
}

export default IdeaForm;

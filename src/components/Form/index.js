import React, { Component } from "react";
import { FormView } from "../Form_View";

const INITIAL_STATE = {
  phName: "Enter your name",
  phEmail: "Enter your email address",
  phMessage: "Your message here...",
  hrAnimate: "",
  name: "",
  email: "",
  message: "",
  services: "",
  budget: "",
  userMessage:'',
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState({...INITIAL_STATE})
    console.log(`
    Name: ${this.state.name}\n
    Email: ${this.state.email}\n
    Services Required: ${this.state.services}\n
    Budget: ${this.state.budget}\n
    Message: ${this.state.message}
    `);
    this.setState({
      userMessage: "Please check Console for Output"
    })
    setTimeout(() => {
      this.setState({
        userMessage: '',
      })
    }, 2000)
  };

  onBlur = event => {
    if (event.target.name === "name") {
      this.setState({
        phName: "Enter your name"
      });
    } else if (event.target.name === "email") {
      this.setState({
        phEmail: "Enter your email address"
      });
    } else if (event.target.name === "message") {
      this.setState({
        phMessage: "Your message here..."
      });
    }
  };

  onFocus = event => {
    if (event.target.name === "name") {
      this.setState({
        phName: ""
      });
    } else if (event.target.name === "email") {
      this.setState({
        phEmail: ""
      });
    } else if (event.target.name === "message") {
      this.setState({
        phMessage: ""
      });
    }
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const {
      name,
      phEmail,
      phName,
      email,
      hrAnimate,
      phMessage,
      services,
      budget,
      message,
      userMessage,
    } = this.state;
    return (
      <FormView
        userMessage={userMessage}
        services={services}
        budget={budget}
        message={message}
        phMessage={phMessage}
        name={name}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onChange={this.onChange}
        phEmail={phEmail}
        hrAnimate={hrAnimate}
        phName={phName}
        onSubmit={this.onSubmit}
        email={email}
      />
    );
  }
}

export default Form;

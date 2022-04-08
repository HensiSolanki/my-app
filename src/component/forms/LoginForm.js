import React, { Component } from "react";
// import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./css/register.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        username: "",
        password: "",
      },
      errors: {},
    };
  }
  //  componentDidMount() {
  //     this.userData = JSON.parse(localStorage.getItem('RegisterUser'));
  //     console.log("fields::",this.userData.email)
  //     if (localStorage.getItem('RegisterUser')) {
  //         this.setState({
  //             email: this.userData.email,
  //             password: this.userData.password
  //         })
  //     }
  // }
  
  handleInput(e) {
    const valid = this.validateForm();
    let { fields } = this.state;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields: fields,
    });
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your username.";
    }

    // if (typeof fields["username"] !== "undefined") {
    //     if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
    //         formIsValid = false;
    //         errors["username"] = "*Please enter alphabet characters only.";
    //     }
    // }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    // if (typeof fields["password"] !== "undefined") {
    //     if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
    //         formIsValid = false;
    //         errors["password"] = "*Please enter secure and strong password.";
    //     }
    // }
    this.setState({
      errors: errors,
    });
    return formIsValid;
  }
  submitLoginForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      const data = {
        email: this.state.fields.username,
        password: this.state.fields.password,
      };
      axios
        .post(`http://127.0.0.1:8000/api/auth/login`, data)
        .then((response) => {
          console.log("response", response);
          if (response.data.token) {
            localStorage.setItem("LoginUser", JSON.stringify(response.data));
            this.setState({ fields: fields });
          }
          this.props.history.push("/about1");
        });
      let fields = {};
      fields["username"] = "";
      fields["password"] = "";
    }
  }
  render() {
    return (
      <>
        <div className="login-container">
          <form
            action=""
            method="post"
            name="userRegistrationForm"
            className="form-login"
            onSubmit={(e) => this.submitLoginForm(e)}
          >
            <h3 className="login-nav">Login page</h3>
            <div>
              <lable htmlFor="username" className="login__label">
               <h4>UserName:</h4> 
              </lable>
              <input
                type="text"
                className="login__input"
                value={this.state.fields.username}
                onChange={(e) => this.handleInput(e)}
                name="username"
                id="username"
                autoComplete="off"
              />
              <div className="errorMsg">
                {this.state.errors.username && (
                  <p>{this.state.errors.username}</p>
                )}
              </div>
            </div>
            <div>
              <lable htmlFor="password" className="login__label">
                <h4>Password:</h4>
              </lable>
              <input
                type="password"
                className="login__input"
                value={this.state.fields.password}
                onChange={(e) => this.handleInput(e)}
                name="password"
                id="password"
                autoComplete="off"
              />
              <div className="errorMsg">
                {this.state.errors.password && (
                  <p>{this.state.errors.password}</p>
                )}
              </div>
            </div>

            <p className="login__label--checkbox">
             <h4>Not Registerd?<a href="/register"> Sign Up</a></h4> 
            </p>
            <button type="submit" className="login__submit">
              Login
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(LoginForm);

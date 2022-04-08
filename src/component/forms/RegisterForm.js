import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import "./css/register.css";

const RegisterForm = () => {
    const history = useHistory();

    const [userRegistration, setUserRegistration] = useState({
       name: "",
        username: "",
        email: "",
        password: "",
        contact: "",
    });
    const [record, setRecord] = useState([]);
    const [validation, setValidation] = useState({
        name:"",
        username: "",
        email: "",
        password: "",
        contact: "",
    });

    const handleInput = (e) => {
        const valid = checkValidation();
        const name = e.target.name; //here in e.target.name , name is comes from form.
        const value = e.target.value; //value is comes from input
        // console.log(name, value);
        setUserRegistration({ ...userRegistration, [name]: value }); //here [name] = [username,email,password,contact] name attribute from form.
        if (!valid) {
            return;
        }
    };
    const checkValidation = () => {
        let errors = validation;
        // if(!userRegistration.username || !userRegistration.email || !userRegistration.password || !userRegistration.contact){
        //   errors.allError = "All Fields are required";
        // //   return true;
        // }
        //UserName validation
        if (!userRegistration.username || userRegistration.username.length < 4) {
            errors.username = "User name is required";
            return true;
        }
        errors.username = "";

        //email setValidation
        const emailCond =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!userRegistration.email.trim()) {
            errors.email = "Email is required";
            return true;
        } else if (!userRegistration.email.match(emailCond)) {
            errors.email = "Please ingress a valid email address";
            return true;
        }
        errors.email = "";

        const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        if (!userRegistration.name.trim()) {
            errors.name = "name is required";
            return true;
        } 
        errors.name = "";

        //contact number Validation
        // const regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
        // if (!userRegistration.contact.trim()) {
        //     errors.contact = "contact is required";
        //     return true;
        // } else if (
        //     !userRegistration.contact.match(regex) ||
        //     userRegistration.contact.length < 9
        // ) {
        //     errors.contact = "Please Enter Valid Contact Number";
        //     return true;
        // }
        // errors.contact = "";

        //password validation
        const password = userRegistration.password;
        if (!password) {
            errors.password = "password is required";
            return true;
        } else if (password.length < 6) {
            errors.password = "Password must be longer than 6 characters";
            return true;
        } else if (password.length >= 20) {
            errors.password = "Password must shorter than 20 characters";
            return true;
        }
         else if (!password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          errors.password = "Password must contain at least one lowercase,  at least one capital letter and at least one number ";
          return true;
        } 
        errors.password = "";
        setValidation(errors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checkValidation()) {
            const newRecord = {...userRegistration, id: new Date().getTime().toString()}; //set the value of inputs in userRegistration object with unique id
                setRecord([...record, newRecord]);
                // add new user record in record object which is created by newRecord and (...record) hold the previous registred records
                setUserRegistration({
                    username: "",
                    email: "",
                    password: "",
                    contact: "",
                });
                axios
                .post(`http://127.0.0.1:8000/api/auth/signUp`,userRegistration)
                .then((response) => {
                    console.log(response);
                    if (response.data.token) {
                        localStorage.setItem("RegisterUser", JSON.stringify(response.data));
                        setUserRegistration({
                            username: "",
                            email: "",
                            password: "",
                            contact: "",
                        });
                        }
                    });
                history.push('/about1');
        }
    };

    useEffect(() => {
        // storing input name
        localStorage.setItem("name", JSON.stringify(userRegistration));
      }, [userRegistration]);

    return (
        <>
            <div className="login-container">
                <form name="userRegistrationForm" className="form-login" onSubmit={handleSubmit}>
                    <h3 className="login-nav">Registration page</h3>
                    <div>
                        <lable htmlFor="name" className="login__label">
                           <h4>Name:</h4> 
                        </lable>
                        <input type="text"
                            className="login__input"
                            value={userRegistration.name}
                            onChange={handleInput}
                            name="name"
                            id="name"
                            autoComplete="off"
                        />
                        <div className="errorMsg">
                            {validation.name && <p>{validation.name}</p>}
                        </div>
                    </div>
                    <div>
                        <lable htmlFor="username" className="login__label">
                           <h4>UserName:</h4> 
                        </lable>
                        <input type="text" className="login__input" value={userRegistration.username} 
                            onChange={handleInput}
                            name="username"
                            id="username"
                            autoComplete="off"
                        />
                        <div className="errorMsg">
                            {validation.username && <p>{validation.username}</p>}
                        </div>
                    </div>
                    <div>
                        <lable htmlFor="email" className="login__label">
                          <h4>Email:</h4>  
                        </lable>
                        <input type="email" className="login__input" value={userRegistration.email}
                            onChange={handleInput}
                            name="email"
                            id="email"
                            autoComplete="off"
                        />
                        <div className="errorMsg">
                            {validation.email && <p>{validation.email}</p>}
                        </div>
                    </div>
                    {/* <div>
                        <lable htmlFor="contact" className="login__label">
                            Contact no:
                        </lable>
                        <input type="text"
                            className="login__input"
                            value={userRegistration.contact}
                            onChange={handleInput}
                            name="contact"
                            id="contact"
                            autoComplete="off"
                        />
                        <div className="errorMsg">
                            {validation.contact && <p>{validation.contact}</p>}
                        </div>
                    </div> */}
                    <div>
                        <lable htmlFor="password" className="login__label">
                           <h4>Password:</h4> 
                        </lable>
                        <input
                            type="password"
                            className="login__input"
                            value={userRegistration.password}
                            onChange={handleInput}
                            name="password"
                            id="password"
                            autoComplete="off"
                        />
                        <div className="errorMsg">
                            {validation.password && <p>{validation.password}</p>}
                        </div>
                    </div>
                    {/* <div>
                        <lable htmlFor="confirmPassword" className="login__label">
                            Confirm Password:
                        </lable>
                        <input
                            type="password"
                            className="login__input"
                            value={userRegistration.confirmPassword}
                            onChange={handleInput}
                            name="confirmPassword"
                            id="confirmPassword"
                            autoComplete="off"
                        />
                        <div className="errorMsg">
                            {validation.confirmPassword && (
                                <p>{validation.confirmPassword}</p>
                            )}
                        </div>
                    </div> */}
                    <label htmlFor="login-sign-up" className="login__label--checkbox">
                        <input
                            id="login-sign-up"
                            type="checkbox"
                            className="login__input--checkbox"
                        />
                        Accept Terms and Conditions
                    </label>
                    <button type="submit" className="login__submit">
                        Submit
                    </button>
                    <p className="login__label--checkbox">
                       <h4>Already Registered? <a href="login">Sign In</a></h4> 
                    </p>
                </form>
            </div>
            <div>
                {record.map((curEle) => {
                    return (
                        <div key={curEle.id}>
                            <p>{curEle.username}</p>
                            <p>{curEle.email}</p>
                            <p>{curEle.contact}</p>
                            <p>{curEle.password}</p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default RegisterForm;

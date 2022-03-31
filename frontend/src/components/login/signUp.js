import React, {useState}from 'react'
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link as LinkRouter } from "react-router-dom";
import userAction from "../../redux/actions/userAction";
import { connect } from "react-redux";
import GoogleSignUp from "./GoogleSignUp";

import Snackbar from './snackBar';

import "../../styles/login.css";

const SignUp = (props) => {
  const country = ["Choose...", "Argentina", "Brazil", "Colombia", "Chile", "Uruguay", "United States", "Spain", "China"]

  const [selectCountry, setSelectCountry] = useState("unselected")

      function selected(event) {
        setSelectCountry(event.target.value)
      }

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      fullName: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
      confirmPassword: event.target[3].value,
      urlImage: event.target[4].value,
      country: selectCountry,
      from: "signUp",
    }
    props.signUpUser(userData)
  }

  return (
    <div className="containerSignUp">
      <Snackbar/>
      <h2><span className="nombreLogin">Create a new account!</span></h2>
      <p>
        ¿Do you already have an account?{" "}
        <LinkRouter to={"/signIn"} className="signUpButton">
          Log In!
        </LinkRouter>
      </p>
        <div className="containerGoogle">
        <GoogleSignUp/>
        </div>
      <Form className="formSignUp" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Full Name" name="fullName" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Email" name="email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>URL Picture Profile </Form.Label>
          <Form.Control type="text" placeholder="URL image" name="urlImage" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Country</Form.Label>
          <Form.Select aria-label="Default select example" name="country" onChange={selected}>
            {country.map(country =>
            <option >{country}</option>
            )}
          </Form.Select>
        </Form.Group>
        <div className="submitContainer">
          <Button variant="primary" type="submit" className="submitButton">
            Sign Up
          </Button>
        </div>
      </Form>
    </div>
  );
};

const mapDispatchToProps = {
  signUpUser: userAction.signUpUser,
};

export default connect(null, mapDispatchToProps)(SignUp);

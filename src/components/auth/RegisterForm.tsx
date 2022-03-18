import React from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <Form className="register-form">
      <h2 className="text-center mb-5">REGISTER</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" />
      </Form.Group>

      <Button className="w-100 mb-3" variant="primary" type="submit">
        Submit
      </Button>
      <p>
        You don't have an account?
        <Link to={`/login`} style={{ color: "crimson" }}>
          Login now
        </Link>
      </p>
    </Form>
  );
};

export default RegisterForm;

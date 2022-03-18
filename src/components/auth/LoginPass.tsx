import React from "react";
import { Form, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPass = () => {
  return (
    <Form className="login-form">
      <h2 className="text-center mb-5">LOGIN</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Button className="w-100 mb-3" variant="primary" type="submit">
        Submit
      </Button>
      <Row className="mb-3" style={{ cursor: "pointer" }}>
        <small>
          <span>Forgot password?</span>
        </small>
      </Row>
      <p>
        You don't have an account?
        <Link to={`/register`} style={{ color: "crimson" }}>
          {`Register Now`}
        </Link>
      </p>
    </Form>
  );
};

export default LoginPass;

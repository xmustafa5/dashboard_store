import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const firstNameRef = useRef(); // Add this line
  const lastNameRef = useRef(); // Add this line
  const phoneNumberRef = useRef(); // Add this line
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const userData = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      phone_number: phoneNumberRef.current.value,
      
      email: emailRef.current.value,
      password1: passwordRef.current.value,
      password2: passwordConfirmRef.current.value
    };

    try {
      setError("");
      setLoading(true);

      const response = await fetch("http://127.0.0.1:10000/api/auth/sign_up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        navigate("/");
      } else {
        setError("Failed to create an account");
      }
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="first_name">First Name</Form.Label>
              <Form.Control id="first_name" type="text" ref={firstNameRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="last_name">Last Name</Form.Label>
              <Form.Control id="last_name" type="text" ref={lastNameRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="phone_number">Phone Number</Form.Label>
              <Form.Control id="phone_number" type="text" ref={phoneNumberRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control id="password" type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password-confirm">Password Confirmation</Form.Label>
              <Form.Control id="password-confirm" type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

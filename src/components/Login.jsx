import { React } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function Login() {
   
   
    
    
    const [error, setError] = useState("");
    const handleSubmit = async (event) => {
      event.preventDefault();
      
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      try {
        // Make a POST request to the JSON server with the login credentials
        const response = await axios.post("http://localhost:3000/login", {
          email,
          password
        });
        
        // Handle the response based on the server's authentication logic
        if (response.data.success) {
          // Handle successful login
        } else {
          setError(response.data.message);
        }
      } catch (error) {
        console.log(error);
        setError("An error occurred while logging in.");
      }
    };
    
  
  
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control id="email" type="text" required />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="password">Password</Form.Label>
              <Form.Control
                id="password"
                type="password"
              
                required
              />
            </Form.Group>
            <Button className="w-100 mt-3" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}

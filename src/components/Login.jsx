import { Card,Form,Button, Alert} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useRef, useState } from "react";

const Login = () => {
    const {login} = useAuth
    const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

  async function handlesubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
       navigate("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }
    return(
        <>
        
        <Card>
        <Card.Body>
            <h2 className="text-center mb-4">log in</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handlesubmit}>
                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" id="email" ref={emailRef} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control type="password" id="password" ref={passwordRef} />
                </Form.Group>
             
                <Button variant="primary" type="submit" disabled={loading}>
                Log in
      </Button>
            </Form>
            <div className="w-100 text-center mt-3">
            <Link to="/ForgotPassword">forgot password</Link>
            </div>
        </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        need an account <Link to="/singup">signup</Link>
        </div>
        </>
    )
}

export default Login;
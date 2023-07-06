import { Card,Form,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <>
        
        <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Signup</h2>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" id="email" />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control type="password" id="password" />
                </Form.Group>
             
                <Button variant="primary" type="submit">
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
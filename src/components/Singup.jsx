import { Card,Form,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const Singup = () => {
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
                <Form.Group>
                    <Form.Label htmlFor="password-confirmatiom">Password confirmation</Form.Label>
                    <Form.Control type="password" id="password-confirmatiom" />
                </Form.Group>
                <Button variant="primary" type="submit">
        signup
      </Button>
            </Form>
        </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
        Already have a account? <Link to="/login">login</Link>
        </div>
        </>
    )
}

export default Singup;
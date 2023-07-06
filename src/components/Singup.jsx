import {  useRef, useState } from "react";
import { Card,Form,Button, Alert} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from 'react-router-dom';

const Singup = () => {
    const {Singup} = useAuth()
    const [error,setError]=useState("")
    const [loading,setLoading]=useState(false)
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordconformationRef = useRef()
    const navigate = useNavigate()
    const handleSubmit = async (e) => { 
        e.preventDefault();
  
        if(passwordRef.current.value !== passwordconformationRef.current.value){
           return setError("password do not match")
        }
        try{
            setError("")
            setLoading(true)
            await Singup(emailRef.current.value,passwordRef.current.value)
            navigate("/")
        }catch{
            setError("faild to create an account")
        }
        setLoading(false)
    }
    return(
        <>
        
        <Card>
        <Card.Body>
            <h2 className="text-center mb-4">Signup</h2>
            {error && <Alert variant="danger">{error}</Alert>
            }
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control type="email" id="email" ref={emailRef} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control type="password" id="password" ref={passwordRef} />
                </Form.Group>
                <Form.Group>
                    <Form.Label htmlFor="password-confirmatiom">Password confirmation</Form.Label>
                    <Form.Control type="password" id="password-confirmatiom" ref={passwordconformationRef} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={loading}>
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
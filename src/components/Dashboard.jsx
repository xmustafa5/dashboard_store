import React, {  useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser && currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            UpdateProfile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button className="btn btn-primary">log out</Button>
      </div>
    </>
  );
};

export default Dashboard;

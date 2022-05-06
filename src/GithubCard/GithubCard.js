import React from "react"
import Card from "react-bootstrap/Card"
import Lionking from './Lion_king.png'

export default function GithubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={Lionking} />
        <Card.Body>
            <Card.Title>Lion Prince</Card.Title>
            <Card.Text>
            I rule the deserts of South Africa.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}
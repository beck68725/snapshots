import React from "react"
import Card from "react-bootstrap/Card"


function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
       
        <Card.Img variant="top" src={`https://github.com/beck68725 `}/>
        
        <Card.Body>
            <Card.Title>Rebecca Coburn</Card.Title>
            <h1>Coding is great!!!</h1>
            <Card.Text>
            I am a coder!!

            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard
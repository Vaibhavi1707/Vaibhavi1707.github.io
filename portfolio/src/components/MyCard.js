import React from 'react'
import Card from 'react-bootstrap/Card'
import "../css/Cards.css"

function MyCard({ textcolor, cardcolor, imgsrc, title, description }) {
    return (
        <Card>
            <Card.Img variant="top" src={imgsrc} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyCard

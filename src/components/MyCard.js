import React from 'react'
import Card from 'react-bootstrap/Card'
import "../css/Cards.css"

function MyCard({ textcolor, cardcolor, imgsrc, title, description }) {
    return (
        <Card style = {{ backgroundColor:cardcolor, color:textcolor }}>
            <Card.Img variant="top" src={imgsrc} style = {{ height: "20vh" }} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyCard

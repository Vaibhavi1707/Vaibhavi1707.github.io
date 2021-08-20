import React from 'react'
import Card from 'react-bootstrap/Card'
import "../css/Cards.css"

function MyCard({ textcolor, cardcolor, imgsrc, title, description }) {
    return (
        <Card>
            <Card.Img variant="top" src={imgsrc} style = {{ backgroundColor:{cardcolor}, color:{textcolor} }} />
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

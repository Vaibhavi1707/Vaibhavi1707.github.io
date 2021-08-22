import React from 'react'
import Card from 'react-bootstrap/Card'
import "../css/Cards.css"

function MyCard({ textcolor, cardcolor, imgsrc, title, description }) {
    return (
        <Card style = {{ backgroundColor:cardcolor, color:textcolor }}>
            <Card.Img src={imgsrc} style = {{ height: "20vh" }} />
            <Card.Body style = {{ padding: "20px" }}>
                <Card.Title style = {{ fontSize: "23px", fontWeight: "700" }}>{title}</Card.Title>
            </Card.Body>
        </Card>
    )
}

export default MyCard

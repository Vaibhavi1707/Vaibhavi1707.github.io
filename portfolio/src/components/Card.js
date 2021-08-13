import React from 'react'
import "../css/Cards.css"

function Card({ imgSrc, title, description }) {
    return (
        <div className = "card">
            <div className = "cards__body">
                <img src = { imgSrc } alt = {title} />
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        </div>
    )
}

export default Card

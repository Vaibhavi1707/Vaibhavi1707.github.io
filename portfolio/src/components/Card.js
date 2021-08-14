import React from 'react'
import "../css/Cards.css"

function Card({ textColor, cardColor, imgSrc, title, description }) {
    return (
        <div className = "card" style = {{ background: cardColor }}>
            <div className = "cards__body">
                <img src = { imgSrc } alt = {title} />
                <h2 style = {{ color: textColor }}>{ title }</h2>
                <p style = {{ color: textColor }}>{ description }</p>
            </div>
        </div>
    )
}

export default Card

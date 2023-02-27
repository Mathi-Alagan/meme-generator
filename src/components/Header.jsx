import React from "react"
import trollFace from "../assets/troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} 
                alt="Troll Face"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Interactive app</h4>
        </header>
    )
}
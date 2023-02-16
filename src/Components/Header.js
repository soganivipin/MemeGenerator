
import React from "react"
import imag from "../Images/troll-face.png"
export default function Header() {
    return (
        <header className="header">
            <img 
                src={imag} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">VIPIN JAIN</h4>
        </header>
    )
}
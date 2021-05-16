import React from "react"
import "../styles/hero.css"
import USER_ICON from "../../static/kaleidot725.png"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to my blog!<br />
                Enjoy lots of posts.<br />
            </h1>
            <div className="hero-author">
                <img src={USER_ICON} className="hero-author-image" alt="avatar"></img>
                <p className="hero-author-text">
                    Written by Katz.<br />
                    Front Engineer at Kumac.Inc. Love JavaScript.
                </p>
            </div>
        </div>
    )
}
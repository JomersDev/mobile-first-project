import React from "react";

export default function Hero() {
    return (
        <section className="hero-container">
            <img className="hero-image" src="../src/assets/hero-image.jpg" />
            <p className="hero-date">July 23, 2022</p>
            <h1 className="hero-title">My new journey as a bootcamp student.</h1>
            <p className="hero-para"> 
                After several months of learning in the Frontend Developer Career Path,
                I've made the bug jump over to the Bootcamp to get expert code reviews of my Solo 
                Projects and meet like-minded peers.
            </p>
        </section>
    )
}
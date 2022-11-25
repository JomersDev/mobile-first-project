import React from "react";

export default function BlogList(props) {
    return (
        <section className="bloglist-container">
            <img className="blog-image" src={props.image} />
            <p className="blog-date">{props.date}</p>
            <h3 className="blog-title">{props.title}</h3>
            <p className="blog-description">{props.description}</p>
        </section>
    )
}
import React from "react";

const Categories = (props) => {
    return (
        <div className={'Categories ' + props.category}>
            <img src={props.img} alt={props.title} className="category-image" />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <button className="category-button">Learn More</button>
            </a>
        </div>
    );
}

export default Categories;

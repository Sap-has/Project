import React from "react";
import './Card.css';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card-card">
                <h3 className="card-card-title">Algorithms</h3>
                <h4 className="card-card-description">These will show you the most popular Algorithms and how they work and are used.</h4>
                <button>Click Me!</button>
            </div>
            <div className="card-card">
                <h3 className="card-card-title">CyberSecurity</h3>
                <h4 className="card-card-description">This page will give you more information on what is CyberSecurity and how it is important.</h4>
                <button>Click Me!</button>
            </div>
            <div className="card-card">
                <h3 className="card-card-title">Computer Science</h3>
                <h4 className="card-card-description">This page will provide you with an overview of what computer science is and all fields it covers.</h4>
                <button>Click Me!</button>
            </div>
            <div className="card-card">
                <h3 className="card-card-title">Computer Architecture</h3>
                <h4 className="card-card-description">This page will provide you with more information on the Architecture of computers and compilers.</h4>
                <button>Click Me!</button>
            </div>
        </div>
    )
}

export default Card;
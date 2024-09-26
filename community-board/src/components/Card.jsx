import React from "react";
import './Card.css';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card-card">
                <h3 className="card-card-title">Algorithms</h3>
                <h4 className="card-card-description">These will show you the most popular Algorithms and how they work and are used</h4>
            </div>
            <div className="card-card">
                <h3 className="card-card-title">CyberSecurity</h3>
                <h4 className="card-card-description">This page will give you more information on what is CyberSecurity and how it is important.</h4>
            </div>
            <div className="card-card">
                <h3 className="card-card-title"></h3>
                <h4 className="card-card-description"></h4>
            </div>
            <div className="card-card">
                <h3 className="card-card-title"></h3>
                <h4 className="card-card-description"></h4>
            </div>
        </div>
    )
}

export default Card;
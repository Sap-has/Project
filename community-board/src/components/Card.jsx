import React from "react";
import './Card.css';
import Categories from "./Categories";

const Card = () => {
    return (
        <div className="card-container">
            <Categories category='computer-science' title='Computer Science' desc='generic'/>
            <Categories category='cyber-security' title='CyberSecurity' desc='generic'/>
            <Categories category='computer-architecture' title='Computer Architecture' desc='generic' />
            <Categories category='artificial-intelligence' title='Artificial Intelligence' desc='generic' />
            <Categories category='super-computing' title='Super Computing' desc='generic' />
            <Categories category='quantumn-computing' title='Quantumn Computing' desc='generic'/>
            <Categories category='career' title='Career Development' desc='generic'/>
        </div>
    )
}

export default Card;
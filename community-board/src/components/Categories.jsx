import React from "react";

const Categories = (props) => {
    return (
        <div className={'Categories ' + props.category}>
            <h3>{props.title}</h3>
            <h4>{props.desc}</h4>
        </div>
    )
}

export default Categories;
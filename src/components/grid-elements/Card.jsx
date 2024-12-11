import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.imageAlt} className={props.class} />
      <div className="card-wrapper">
        <h2 className="card_number">{props.number}</h2>
        <h3 className="card_title">{props.title}</h3>
        <p className="card_text">{props.paragraph}</p>
      </div>
    </div>
  );
}

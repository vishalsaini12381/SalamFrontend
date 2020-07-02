import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card Banner--Card">
      <img src={props.imageSrc} alt="Avatar" style={{ width: "100%" }} />
      </div>
  );
}

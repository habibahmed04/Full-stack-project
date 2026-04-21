import React from 'react';
import './Card.css';

function Card({title, text, img}) {
  return (
    <div className="card">
      {img && <img src={img} alt={title} style={{width:'100%',height:200,objectFit:'cover'}}/>}
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
export default Card;


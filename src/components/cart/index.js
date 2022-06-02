import React from "react";

import "./cart.styles.css";

export const Cart = (props) => {
  // console.log("Cart : ", props.monster.name);
  return (
    <div className="card-container">
      <img alt="monster" src={`http://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
      <h1>{props.monster.name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};

import React from "react";
import { Cart } from "../cart";

import "./cart-list.styles.css";

export const CartList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster, index) => (
        <Cart key={index} monster={monster} />
      ))}
    </div>
  );
};

import React from "react";
import './cart-item.css';

export const CartItem = ({ price, title }) => {
    return (
        <div className="cart-item">
            <span> { title }</span>
            <div className="cart-item__price">
                <span>{ price } uah</span>
            </div>
        </div>
    )
}
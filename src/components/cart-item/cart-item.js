import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { deleteItemFromCart } from "../../redux/cart/reducer";
import './cart-item.css';

export const CartItem = ({ price, title, id }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteItemFromCart(id));
    }

    return (
        <div className="cart-item">
            <span> { title }</span>
            <div className="cart-item__price">
                <span>{ price } UAH</span>
                <AiOutlineCloseCircle
                size={20}
                className="order-item__delete-icon"
                onClick={handleClick}/>
            </div>
        </div>
    )
}
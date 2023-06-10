import React from 'react';
import { calcTotalPrice } from '../utils/utils';
import { Button } from '../button';
import { CartItem } from '../cart-item';
import './cart-menu.css';

export const CartMenu = ({ items, onClick }) => {
    return (
        <div className="cart-menu">
            <div className='cart-menu__games-list'>
                {
                    items.length > 0 ?
                        items.map(game => (
                            <CartItem
                                key={game.title}
                                price={game.price}
                                title={game.title}
                                id={game.id}
                            />
                        )) : 'Cart is empty'
                }
            </div>
            {
                items.length > 0 ?
                    <div className='cart-menu__arrange'>
                        <div className='cart-menu__total-price'>
                            <span>Total:</span>
                            <span>{calcTotalPrice(items)} UAH</span>
                        </div>
                        <Button type="primary" size="m" onClick={onClick}>
                            Place an Order
                        </Button>
                    </div>
                    : null
            }
        </div>
    )
}
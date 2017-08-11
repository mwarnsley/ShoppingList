import React, {Component} from 'react';

import CartItem from './CartItem';

class CartContainer extends Component {
  render() {
    const {cart, dispatch} = this.props;
    const cartItems = cart.map((item, index) => {
      return (
        <CartItem key={index} dispatch={dispatch} info={item}/>
      );
    });
    return (
      <div id="cart_container">
        <h4>Current Cart Items</h4>
        <div id="cart_list">
          {cartItems}
        </div>
      </div>
    );
  }
}

export default CartContainer;

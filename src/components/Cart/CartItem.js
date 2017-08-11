import React, {Component} from 'react';
import {Row, Col, Panel, Button} from 'react-bootstrap';

import Rating from '../Results/Rating';
import {doAddQuantity} from '../../actions/cartActions';
import {doRemoveQuantity} from '../../actions/cartActions';

class CartItem extends Component {
  constructor() {
    super();

    this.addQuantity = this.addQuantity.bind(this);
    this.removeQuantity = this.removeQuantity.bind(this);
  }
  addQuantity() {
    const {dispatch, info} = this.props;
    dispatch(doAddQuantity(info.itemId));
  }
  removeQuantity() {
    const {dispatch, info} = this.props;
    dispatch(doRemoveQuantity(info.itemId));
  }
  render() {
    const {info} = this.props;
    console.log(info);
    return (
      <Panel className="cart-item">
        <Row>
          <Col xs={12} sm={4} md={4}>
            <img className="cart-item-image" src={`${info.mediumImage}`} alt={info.name} />
            <p className="cart-item-price">${info.salePrice}</p>
          </Col>
          <Col xs={12} sm={8} md={8}>
            <div className="name-rating-container">
              <h3 className="item-name">
                {info.name}
              </h3>
              <Rating rating={info.customerRating}/>
            </div>
            <div className="options-container">
              <Button onClick={this.removeQuantity} bsSize="xsmall" className="remove-btn" bsStyle="primary"><i className="fa fa-minus" aria-hidden="true"></i></Button>
              <span className="quantity-box">{info.qty}</span>
              <Button onClick={this.addQuantity} bsSize="xsmall" className="add-btn" bsStyle="primary"><i className="fa fa-plus" aria-hidden="true"></i></Button>
            </div>
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default CartItem;

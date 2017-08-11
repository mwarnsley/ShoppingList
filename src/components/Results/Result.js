import React, {Component} from 'react';
import {Row, Col, Panel, Button, Modal} from 'react-bootstrap';
import {doAddToCart} from '../../actions/cartActions';
import {doAddQuantity} from '../../actions/cartActions';

import Rating from './Rating';

class Result extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
  }
  close() {
    this.setState({
      showModal: false
    });
  }
  open() {
    this.setState({
      showModal: true
    });
  }
  addToCart(itemId) {
    const {dispatch, cartItem} = this.props;
    if (cartItem !== undefined) {
      dispatch(doAddQuantity(itemId));
      return;
    }
    dispatch(doAddToCart(itemId));
  }
  render() {
    const {info} = this.props;
    return (
      <Panel className="result-item">
        <Row>
          <Col xs={12} sm={4} md={4}>
            <img className="item-image" src={`${info.mediumImage}`} alt={info.name} />
            <p className="item-price">${info.salePrice}</p>
          </Col>
          <Col xs={12} sm={8} md={8}>
            <div className="name-rating-container">
              <h3 className="item-name">
                {info.name}
              </h3>
              <Rating rating={info.customerRating}/>
            </div>
            <div className="options-container">
              <Button className="add-btn" bsStyle="success" onClick={() => this.addToCart(info.itemId)}>Add To Cart</Button>
              <Button className="details-btn" bsStyle="info" onClick={this.open}>View Details</Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h4>Text in a modal</h4>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                    <hr />
                    <h4>Overflowing text to show scroll behavior</h4>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                    <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>
            </div>
          </Col>
        </Row>
      </Panel>
    );
  }
}

export default Result;

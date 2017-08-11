import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Well, Panel} from 'react-bootstrap';

import Search from './Search';
import ResultsContainer from './Results/ResultsContainer';
import CartContainer from './Cart/CartContainer';
import LoadingSpinner from '../common/LoadingSpinner';

class Main extends Component {
  render() {
    const {dispatch, pageLoading, searchLoading, search, cart} = this.props;
    if (pageLoading) {
      return <LoadingSpinner />
    }
    return (
      <Grid id="app_container">
        {searchLoading ? <LoadingSpinner /> : null}
        <Well>
          <Panel>
            <h1 className="app-title">Walmart Shopping List</h1>
          </Panel>
        </Well>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <Well>
              <Search dispatch={dispatch}/>
            </Well>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={8} md={8}>
            <Well>
              <ResultsContainer cart={cart} search={search} dispatch={dispatch}/>
            </Well>
          </Col>
          <Col xs={12} sm={4} md={4}>
            <Well>
              <CartContainer cart={cart} dispatch={dispatch}/>
            </Well>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default connect(state => ({
  pageLoading: state.loading.pageLoading,
  searchLoading: state.loading.searchLoading,
  search: state.search,
  cart: state.cart,
}))(Main);

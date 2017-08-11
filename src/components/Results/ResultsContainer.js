import React, {Component} from 'react';
import {Row} from 'react-bootstrap';

import Result from './Result';

class ResultsContainer extends Component {
  render() {
    const {search, dispatch, cart} = this.props;
    const results = search.results.map((item, index) => {
      const matchingCartItem = cart.find(c => c.itemId === item.itemId);
      return (
        <Result cartItem={matchingCartItem} key={index} info={item} dispatch={dispatch}/>
      );
    });
    const resultsText = search.currentQuery ? 'Search results for: ' : 'Search results will appear here';
    return (
      <div id="results_container">
        <h3 className="search-results-text">{resultsText} {search.currentQuery}</h3>
          <div id="results_list">
            {results}
          </div>
      </div>
    );
  }
};

export default ResultsContainer;

import React, {Component} from 'react';
import {FormGroup, FormControl, Row, Button} from 'react-bootstrap';
import {typingDebounce} from '../common/debounce';

import {doSearch} from '../actions/searchActions';

class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: '',
    };
    this._onSearchChange = this._onSearchChange.bind(this);
    this._onSearch = this._onSearch.bind(this);
    this.handleEnterPress = this.handleEnterPress.bind(this);
  }
  _onSearchChange(e) {
    const searchString = e.target.value;
    this.setState({
      searchValue: searchString,
    });
  }
  _onSearch() {
    const {dispatch} = this.props;
    const searchString = this.state.searchValue;
    dispatch(doSearch(searchString));
  }
  handleEnterPress(e) {
    if (e.keyCode === 13) {
      this._onSearch();
    }
  }
  render() {
    return (
      <FormGroup id="search_container">
        <Row className="search-row">
          <FormControl
            type="text"
            placeholder="Search Item..."
            className="item-search-box"
            onKeyUp={this.handleEnterPress}
            onChange={this._onSearchChange}
          />
          <Button
            className="search-btn"
            onClick={this._onSearch}>
            <i className="fa fa-search search-icon" aria-hidden="true"></i>
          </Button>
        </Row>
        </FormGroup>
    );
  }
}

export default Search;

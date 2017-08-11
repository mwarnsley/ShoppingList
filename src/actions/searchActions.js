import axios from 'axios';
import {pageLoading} from './loadingActions';
import {searchLoading} from './loadingActions';
import {walmartAPIKey} from '../../config';

// Writing the action to send the search
export function doSearch(keywords) {
  return async (dispatch) => {
    try {
      dispatch(searchLoading(true));
      const searchedItem = await axios.get(`http://api.walmartlabs.com/v1/search?query=${keywords}&format=json&apiKey=${walmartAPIKey}`);
      console.log(searchedItem.data);
      dispatch({
        type: "SEARCH_ITEM",
        payload: searchedItem.data
      });
      dispatch(searchLoading(false));
    } catch(err) {
      dispatch({
        type: "SEARCH_ITEM",
        payload: err
      });
    }
  };
}

// searchedItem.data.query is the name of the current search
// searchedItem.data.item = array of objects. each object container keys of:
/*
  customerRating
  largeImage
  mediumImage
  longDescription
  thumbnailImage
  name
  salePrice
*/

import axios from 'axios'
import itemsActions from '../actions/items';

axios.defaults.baseURL = 'http://5af1eee530f9490014ead8c4.mockapi.io';

const fetchItems = () => dispatch => {
  dispatch(itemsActions.fetchItemsRequest())
  axios
    .get('/items')
    .then(({ data }) =>
      dispatch(itemsActions.fetchItemsSuccess(data)),
    )
    .catch(error =>
      dispatch(
        itemsActions.fetchItemsError(error.message),
      ),
    )
};

const itemsOperations = { fetchItems };

export default itemsOperations;
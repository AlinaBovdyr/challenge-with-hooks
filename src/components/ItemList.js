import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import itemsOperations from '../redux/operations/items';
import itemsSelectors from '../redux/selectors/items';
import List from './List';

export default function ItemList() {
  const dispatch = useDispatch();

  const items = useSelector(itemsSelectors.getItems);
  const isLoading = useSelector(itemsSelectors.getIsLoading);
  const isError = useSelector(itemsSelectors.getIsError);

  useEffect(() => {
    dispatch(itemsOperations.fetchItems());
  }, [dispatch]);

  return (
    <ul>
      {isLoading && <h1>Loading...</h1>}
      {isError && alert(isError)}
      <List items={items} />
    </ul>
  );
}

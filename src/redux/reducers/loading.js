import { createReducer } from '@reduxjs/toolkit';
import itemsActions from '../actions/items';

export const loading = createReducer(false, {
  [itemsActions.fetchItemsRequest]: () => true,
  [itemsActions.fetchItemsSuccess]: () => false,
  [itemsActions.fetchItemsError]: () => false,
});
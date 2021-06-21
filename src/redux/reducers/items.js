import { createReducer } from '@reduxjs/toolkit';
import itemsActions from '../actions/items';

export const items = createReducer([], {
  [itemsActions.fetchItemsSuccess]: (_, { payload }) => payload,
});
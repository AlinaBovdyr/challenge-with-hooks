import { createReducer } from '@reduxjs/toolkit';
import itemsActions from '../actions/items';

export const error = createReducer(null, {
  [itemsActions.fetchItemsError]: (_, { payload }) => payload,
});
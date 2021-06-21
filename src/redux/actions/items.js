import { createAction } from '@reduxjs/toolkit';

const fetchItemsRequest = createAction('FETCH-ITEMS-REQUEST');
const fetchItemsSuccess = createAction('FETCH-ITEMS-SUCCESS');
const fetchItemsError = createAction('FETCH-ITEMS-ERROR');

const itemsActions = { fetchItemsRequest, fetchItemsSuccess, fetchItemsError };

export default itemsActions;

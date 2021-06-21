const getItems = state => state.items;

const getIsLoading = state => state.isLoading;

const getIsError = state => state.error;

const itemsSelectors = {
  getItems,
  getIsLoading,
  getIsError,
};

export default itemsSelectors;
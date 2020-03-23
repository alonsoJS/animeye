import constants from './constants';

export default (state, action) => {
  switch (action.type) {
    case constants.SEARCH_ACTION:
      return {
        ...state,
        search_results: action.payload
      };
    case constants.SET_SELECTED_ITEM_INFO_ACTION:
      return {
        ...state,
        selected_item: action.payload
      };
    default:
      return state;
  }
};

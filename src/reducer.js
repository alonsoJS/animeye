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
    case constants.TOGGLE_IS_LOADING:
      return {
        ...state,
        is_loading_info: !state.is_loading_info
      };
    case constants.UPDATE_IS_MOBILE:
      return {
        ...state,
        is_mobile: action.payload
      };
    default:
      return state;
  }
};

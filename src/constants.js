const actions = {
  SEARCH_ACTION: 'SEARCH_ACTION',
  SET_SELECTED_ITEM_INFO_ACTION: 'SET_SELECTED_ITEM_INFO_ACTION',
  TOGGLE_IS_LOADING: 'TOGGLE_IS_LOADING',
  UPDATE_IS_MOBILE: 'UPDATE_IS_MOBILE'
};

const search_selections = [
  'anime',
  'manga'
];


export default {
  ...actions,
  search_selections
};

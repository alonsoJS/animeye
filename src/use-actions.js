import constants from './constants';
import { useStateValue } from './context';
import searchFromApi from './api/search';
import getItemInfo from './api/get-item-info';

function useActions() {
  const [, dispatch] = useStateValue();

  async function search(params) {
    toggleIsLoading();
    searchFromApi(params).then(payload => {
      dispatch({
        type: constants.SEARCH_ACTION,
        payload
      });
      toggleIsLoading();
    });
  }

  async function setSelectedItemInfo(id) {
    toggleIsLoading();

    getItemInfo(id).then(payload => {
      dispatch({
        type: constants.SET_SELECTED_ITEM_INFO_ACTION,
        payload
      });
      toggleIsLoading();
    });
  }

  function toggleIsLoading() {
    dispatch({
      type: constants.TOGGLE_IS_LOADING
    });
  }

  function updateIsMobile(isMobile) {
    dispatch({
      type: constants.UPDATE_IS_MOBILE,
      payload: isMobile
    })
  }

  return {
    search,
    setSelectedItemInfo,
    toggleIsLoading,
    updateIsMobile
  };
}

export default useActions;

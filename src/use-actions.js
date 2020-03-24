import constants from './constants';
import { useStateValue } from './context';
import searchFromApi from './api/search';
import getItemInfo from './api/get-item-info';

function useActions() {
  const [, dispatch] = useStateValue();

  async function search(params) {
    const payload = await searchFromApi(params);

    dispatch({
      type: constants.SEARCH_ACTION,
      payload
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

  return {
    search,
    setSelectedItemInfo,
    toggleIsLoading
  };
}

export default useActions;

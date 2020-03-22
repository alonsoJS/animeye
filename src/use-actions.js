import pageConstants from './constants';
import { useStateValue } from './context';
import searchFromApi from './api/search';

function useActions() {
  const [, dispatch] = useStateValue();

  async function search() {
    const payload = await searchFromApi();

    dispatch({
      type: pageConstants.SEARCH_ACTION,
      payload
    });
  }

  return {
    search,
  };
}

export default useActions;

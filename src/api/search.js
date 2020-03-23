import axios from 'axios';

async function search(params) {
  const {
    query
  } = params;
  const url = `https://api.jikan.moe/v3/search/anime?q=${query}`;
  const response = await axios.get(url);

  return response.data.results;
}

export default search;

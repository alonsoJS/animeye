import axios from 'axios';

async function search () {
  const url = 'https://api.jikan.moe/v3/search/anime?q=bleach';
  const response = await axios.get(url);

  return response.data.results;
}

export default search;

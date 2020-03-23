import axios from 'axios';

async function getItemInfo(id) {
  const url = `https://api.jikan.moe/v3/anime/${id}`;
  const response = await axios.get(url);

  return response.data;
}

export default getItemInfo;

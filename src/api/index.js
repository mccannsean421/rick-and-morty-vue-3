import axios from 'axios';

/**
 *
 */
const getCharacters = (characterIds = []) => {
  return axios.get(`https://rickandmortyapi.com/api/character/${characterIds}`);
};

export default {
  getCharacters,
}

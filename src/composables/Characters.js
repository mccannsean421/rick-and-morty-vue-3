import { ref, computed } from 'vue';
import api from  '../api';

export default function Characters() {

  let characters = ref([]);

  const getCharacterSet = async () => {
  /**
   *  There are about 600 characters in the R&M API
   * Need to figure out a way to get the most up to date amount
   */
    const randomIds = [...Array(4)].map(() => Math.floor(Math.random() * 600));

    try {
      const res = await api.getCharacters(randomIds);
      characters.value = res.data;
    } catch(error) {
      console.error(error);
    }
  };

  const guessWho = computed(() => characters.value[Math.floor(Math.random() * 3)]);

  return {
    getCharacterSet,
    characters,
    guessWho,
  };
}

<template>
  <div class="quiz">
    <guess-who-image :character="guessWho" />
    <button @click="getCharacterSet">Get chars</button>
  </div>
</template>

<script>
import Characters from '../composables/Characters';
import GuessWhoImage from './GuessWhoImage/GuessWhoImage.vue';

export default {
  components: { GuessWhoImage },
  name: 'Quiz',
  setup() {
    const { getCharacterSet, characters, guessWho } = Characters();

    return {
      getCharacterSet,
      characters,
      guessWho
    };
  },
}
</script>

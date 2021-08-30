<template>
  <img v-if="character?.image" :src="character.image" alt="" />
</template>

<script>
export default {
  name: 'GuessWhoImage',
  props: {
    character: {
      type: Object,
      default: () => {},
    }
  }
}
</script>

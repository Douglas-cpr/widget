<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ChevronDown from './ChevronDown.vue'
import Chat from './Chat.vue'
import Close from './Close.vue'
import ArrowRight from './ArrowRight.vue'
import Atention from './Atention.vue'
import Correct from './Correct.vue'

export default {
  components: { Loading, Copy, ChevronDown, Chat, Close, ArrowRight, Atention, Correct },
  props: {
    name: { type: String, required: true }
  }
}
</script>

<style>

</style>

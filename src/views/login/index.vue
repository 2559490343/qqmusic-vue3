<template>
  <div class="m-login">
    {{ count }}
    <button @click="handleClick">+</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(1);
function handleClick() {
  count.value++;
}
</script>
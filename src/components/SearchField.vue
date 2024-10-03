<script setup lang="ts">
const search = defineModel("search", {
  required: true,
});
</script>

<template>
  <input v-model="search" type="search" />
</template>

<style lang="css" scoped>
input[type="search"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
}
</style>

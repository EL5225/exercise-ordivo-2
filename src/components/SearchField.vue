<script setup lang="ts">
const emit = defineEmits<{
  search: [value: string];
}>();

const handleChange = (e: Event) => {
  const event = e.target as HTMLInputElement;
  const value = event?.value;

  emit("search", value);
};
</script>
<template>
  <input @input="handleChange" type="search" />
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

<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <main>
    <NavBar title="Pokemon" />
    <slot />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 5rem;
  background-color: gainsboro;
  overflow-y: auto;
  padding-bottom: 5rem;
}
</style>

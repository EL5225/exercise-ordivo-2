<script setup lang="ts">
import { TCard } from "@/utils";

defineProps<TCard>();
</script>

<template>
  <router-link :to="link" class="card">
    <h3>{{ title }}</h3>
    <img src="/images/pokeball.webp" alt="pokeball" width="30" />
  </router-link>
</template>

<style lang="css" scoped>
.card {
  width: 200px;
  max-height: fit-content;
  background-color: rgb(234, 246, 255);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  padding: 15px 20px;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: black;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: rgb(212, 232, 247);
    color: black;
  }

  h3 {
    text-transform: capitalize;
    font-weight: 600;
  }
}
</style>

<script setup lang="ts">
const props = defineProps<{ title: string }>();
</script>

<template>
  <header>
    <router-link to="/" class="home-nav">{{ props.title }}</router-link>
    <router-link to="/favorite" class="fav">Favorite</router-link>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  padding: 1rem 2rem;
  background-color: rgb(25, 55, 75);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
}

.home-nav {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 2rem;
}

.fav {
  margin-left: auto;
  text-decoration: none;
  padding: 8px 15px;
  background-color: rgb(74, 136, 136);
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  transition: 0.2s;
}

.fav:hover {
  background-color: rgb(121, 160, 187);
}
</style>

<script setup lang="ts">
import Card from "@/components/Card.vue";
import { usePokemonStore } from "@/utils";

const pokemonStore = usePokemonStore();

console.log(pokemonStore.pokemonList);
</script>

<template>
  <section>
    <div v-if="pokemonStore.pokemonList?.length" class="fav-header">
      <h1>Favorites Pokemon</h1>
      <button @click="pokemonStore.resetPokemonList()">Clear</button>
    </div>
    <div v-if="pokemonStore.pokemonList?.length" class="card-list">
      <Card
        v-for="pokemon in pokemonStore.pokemonList"
        :key="pokemon.name"
        :title="pokemon.name"
        :link="`/pokemon/${pokemon.name}`" />
    </div>

    <div v-else>
      <h1>No favorites Pokemon</h1>
    </div>
  </section>
</template>

<style lang="css" scoped>
section {
  width: 100%;
  display: flex;
  padding: 0 5rem;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
}

h1 {
  font-size: 2rem;
}

.fav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
}

.fav-header button {
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  background-color: rgb(159, 30, 30);
  color: white;
  transition: 0.2s ease-in-out;
}

.fav-header button:hover {
  background-color: rgb(192, 63, 63);
}

.card-list {
  width: 100%;
  display: grid;
  padding-bottom: 1rem;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  row-gap: 2rem;
  overflow-y: auto;
}
</style>

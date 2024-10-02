<script setup lang="ts">
import Card from "@/components/Card.vue";
import SearchField from "@/components/SearchField.vue";
import { getListPokemons, Result } from "@/utils";
import { onMounted, ref, watch } from "vue";

const pokemonList = ref<Result[]>();
const searchPokemon = ref("");
const searchValues = ref<Result[]>();
const scroller = ref<Element | null>(null);
const endOfScroller = ref<Element | null>(null);
const limit = ref(50);

const fetchPokemon = async () => {
  try {
    const data = await getListPokemons(limit.value);
    pokemonList.value = data?.results;
  } catch (error) {
    console.error(error);
  }
};

fetchPokemon();

watch(searchPokemon, () => {
  if (!searchPokemon.value) {
    searchValues.value = undefined;
    fetchPokemon();
  }
  const filteredPokemon = pokemonList?.value?.filter((pokemon) => {
    return pokemon.name
      .toLowerCase()
      .includes(searchPokemon.value.toLowerCase());
  });

  searchValues.value = filteredPokemon;
});

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      let entry = entries[0];
      if (entry.isIntersecting) {
        limit.value += 50;
        fetchPokemon();
      }
    },
    { root: scroller.value, rootMargin: "200px" }
  );
  observer.observe(endOfScroller.value as Element);
});
</script>

<template>
  <section>
    <SearchField
      name="search-pokemon"
      placeholder="Search Pokemon"
      v-model:search="searchPokemon" />
    <div ref="scroller" class="card-list">
      <Card
        v-for="pokemon in searchPokemon ? searchValues : pokemonList"
        :key="pokemon.name"
        :title="pokemon.name"
        :link="`/pokemon/${pokemon.name}`" />
      <div v-show="pokemonList && !searchPokemon" ref="endOfScroller"></div>
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  display: flex;
  padding: 0 5rem;
  flex-direction: column;
  gap: 3rem;
  overflow: hidden;
}

.card-list {
  width: 100%;
  height: 80%;
  display: grid;
  padding-bottom: 1rem;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 2rem;
  overflow-y: auto;
}
</style>

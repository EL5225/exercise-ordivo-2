import { Result } from "@/utils/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export const usePokemonStore = defineStore("pokemon", () => {
  const pokemonList = ref<Result[]>([]);
  function setPokemonList(list: Result) {
    if (pokemonList.value?.find((pokemon) => pokemon.name === list.name)) {
      pokemonList.value = pokemonList.value?.filter(
        (pokemon) => pokemon.name !== list.name
      );
    } else {
      pokemonList.value?.push(list);
    }
  }

  const resetPokemonList = () => {
    pokemonList.value = [];
  };

  return {
    pokemonList,
    setPokemonList,
    resetPokemonList,
  };
});

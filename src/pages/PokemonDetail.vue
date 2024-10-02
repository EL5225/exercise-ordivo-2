<script setup lang="ts">
import PokemonAbility from "@/components/PokemonAbility.vue";
import PokemonType from "@/components/PokemonType.vue";
import { getPokemonByName, TPokemonDetail, usePokemonStore } from "@/utils";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pokemon = ref<TPokemonDetail | undefined>({});
const loading = ref(true);

const pokemonStore = usePokemonStore();

onMounted(async () => {
  const data = await getPokemonByName(route.params.name as string);

  if (data) {
    loading.value = false;
    pokemon.value = data;
  }
});
</script>

<template>
  <section v-if="!loading">
    <img :src="pokemon?.sprites?.front_default" alt="poke-image" />
    <div class="info">
      <h1>{{ pokemon?.name }}</h1>

      <p>Height: {{ pokemon?.height }}</p>

      <p>Weight: {{ pokemon?.weight }}</p>

      <div class="stats">
        <div>
          <p v-for="stats in pokemon?.stats" :key="stats?.stat?.name">
            {{ stats?.stat?.name }}: {{ stats?.base_stat }}
          </p>
        </div>
      </div>

      <div class="types">
        <PokemonType
          v-for="types in pokemon?.types"
          :type="types?.type?.name || ''"
          :key="types?.type?.name" />
      </div>

      <div class="abilities">
        <PokemonAbility
          v-for="abilities in pokemon?.abilities"
          :ability="abilities?.ability?.name || ''"
          :key="abilities?.ability?.name" />
      </div>

      <button
        @click="
          pokemonStore.setPokemonList({
            name: pokemon?.name as string,
            url: `https://pokeapi.co/api/v2/${pokemon?.name}`,
          })
        ">
        {{
          pokemonStore.pokemonList?.find((poke) => poke.name === pokemon?.name)
            ? "Remove from favorite"
            : "Add to favorite"
        }}
      </button>
    </div>
  </section>

  <section class="loading" v-else>
    <div class="loader"></div>
  </section>
</template>

<style scoped lang="css">
section {
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 10rem;
  gap: 10rem;
}

img {
  width: 30vw;
  object-fit: contain;
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.types {
  display: flex;
  gap: 1rem;
}

.stats {
  display: flex;
  gap: 5rem;
  font-size: large;
}

.stats > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.abilities {
  display: flex;
  gap: 1rem;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  text-transform: capitalize;
}

p {
  font-weight: 500;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: larger;
}

.loader {
  height: 60px;
  aspect-ratio: 1;
  position: relative;
}
.loader::before,
.loader::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  transform-origin: bottom;
}
.loader::after {
  background: radial-gradient(at 75% 15%, #fffb, #0000 35%),
    radial-gradient(at 80% 40%, #0000, #0008),
    radial-gradient(circle 5px, #fff 94%, #0000),
    radial-gradient(circle 10px, #000 94%, #0000),
    linear-gradient(#f93318 0 0) top / 100% calc(50% - 5px),
    linear-gradient(#fff 0 0) bottom/100% calc(50% - 5px) #000;
  background-repeat: no-repeat;
  animation: l20 1s infinite cubic-bezier(0.5, 120, 0.5, -120);
}
.loader::before {
  background: #ddd;
  filter: blur(8px);
  transform: scaleY(0.4) translate(-13px, 0px);
}
@keyframes l20 {
  30%,
  70% {
    transform: rotate(0deg);
  }
  49.99% {
    transform: rotate(0.2deg);
  }
  50% {
    transform: rotate(-0.2deg);
  }
}
</style>

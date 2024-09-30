<script setup lang="ts">
defineProps<{ type: string }>();
</script>
<template>
  <div :class="`type type-${type}`">{{ type }}</div>
</template>
<style scoped lang="css">
.type {
  padding: 10px;
  border-radius: 20px;
  min-width: 150px;
  text-align: center;
  color: rgb(0, 0, 0);
  font-weight: bold;
  font-size: 1rem;
  text-transform: capitalize;
}

.type-normal {
  background-color: #a8a878;
}

.type-fire {
  background-color: #f08030;
}

.type-water {
  background-color: #6890f0;
}

.type-electric {
  background-color: #f8d030;
}

.type-grass {
  background-color: #78c850;
}

.type-ice {
  background-color: #98d8d8;
}

.type-fighting {
  background-color: #c03028;
}

.type-fairy {
  background-color: #f85888;
}

.type-poison {
  background-color: #a040a0;
}

.type-ground {
  background-color: #e0c068;
}

.type-flying {
  background-color: #a890f0;
}

.type-psychic {
  background-color: #f85888;
}

.type-bug {
  background-color: #55c31e;
}

.type-rock {
  background-color: #b8a038;
}

.type-ghost {
  background-color: #705898;
}

.type-dragon {
  background-color: #7038f8;
}

.type-dark {
  background-color: #705848;
}

.type-steel {
  background-color: #b8b8d0;
}

.type-unknown {
  background-color: #68a090;
}
</style>

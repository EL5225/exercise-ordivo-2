<script setup lang="ts">
defineProps<{ ability: string }>();
</script>
<template>
  <div class="ability">{{ ability }}</div>
</template>
<style scoped lang="css">
.ability {
  padding: 10px;
  border-radius: 20px;
  min-width: 150px;
  text-align: center;
  background-color: rgb(25, 55, 75);
  color: aliceblue;
  font-weight: bold;
  font-size: 1rem;
  text-transform: capitalize;
}
</style>

<script setup lang="ts">
const props = defineProps({
  error: Object,
});
</script>

<template>
  <div>
    <h1>{{ error?.statusCode ?? "error" }}</h1>
    <p>{{ error?.message ?? "message" }}</p>
    <NuxtLink to="/">Go back home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
console.log("the index page");
</script>

<template>
  <div class="page_container">
    <p>i'm at index page</p>
    <ClientOnly>
      <TheExperience />
    </ClientOnly>
  </div>
</template>

<style></style>

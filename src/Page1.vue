<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Page1',
  meta: [
    {
      name: `description`,
      content: `Page1 description`,
    },
  ],
})</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Page 1</h1>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <router-view />
</template>

<script setup>
  import { useCardDataStore } from './store/card-data.js';

  const storeCardData = useCardDataStore();

  import { QUESTIONS } from '../questions.js';
  

  if (localStorage.length == 0) {
    console.log("LS vide");
    storeCardData.addQuestions(QUESTIONS);
    // console.log(QUESTIONS);
    // console.log(storeCardData.state);
  } else {
    console.log("LS non vide");
  }
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background-color: #fbdcb3;
  }
</style>

<template>
  <div class="game-container">
    <h1>Matching Memory Card</h1>
    <img id="gameimg" src="../assets/images/Cute_Frog.jpg" alt="" />
    <MatchingCard />
  </div>
</template>

<script>
import MatchingCard from "../components/MatchingCard.vue";

export default {
  name: "MatchingCardGame",
  components: {
    MatchingCard,
  },
};
</script>
<style scoped>
.game-container {
  width: 100%;
  height: 100vh;
}

#gameimg {
  width: 200px;
  height: 200px;
  display: block;
  margin: auto;
}

h1 {
  padding-top: 80px;
  font-family: "Shantell Sans", cursive;
  font-size: 48px;
  color: #2d2615;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
}

@media only screen and (max-width: 400px) {
  h1 {
    font-size: 30px;
  }
}
</style>

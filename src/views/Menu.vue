<template>
  <div class="menu-container">
    <router-link to="/">
      <img src="../assets/icons/backicon.png" />
    </router-link>

    <h1>
      Today's <br />
      activity
    </h1>

    <img id="menuimg" src="../assets/images/frog2.jpg" alt="" />

    <div class="menu-box">
      <button class="menuone" @click="$router.push('/matching-card')">
        Memory Matching Card
      </button>

      <button class="menuone" @click="$router.push('/word-card')">
        Memory word Card
      </button>

      <button class="menuone" @click="$router.push('/word-card-test')">
        Memory word Card Test
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pangolin&family=Shantell+Sans:wght@400;600;800&display=swap");
.menu-container {
  width: 100%;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fedbb3;
}

.menu-container img {
  width: 50px;
  height: 50px;
  display: block;
}

.menu-container h1 {
  font-family: "Shantell Sans", cursive;
  font-size: 28px;
  color: #2d2615;
  letter-spacing: 2px;
}

#menuimg {
  width: 250px;
  height: 250px;
}

.menu-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.menuone {
  width: 150px;
  height: 150px;
  margin: 0 20px;
  /*background-color: #fbebc4;*/
  background-color: #866461;
  border-radius: 14px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  color: #fff;
  font-family: "Shantell Sans", cursive;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}

.menuone:hover {
  background-color: #fedbb3;
}
</style>

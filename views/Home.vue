<template>
  <div class="home-container">
    <img src="../assets/images/frogbg.png" alt="" />
    <h1>GAEGUL</h1>
    <p>
      Effortless Memory Game <br />
      Anytime Anywhere
    </p>

    <button @click="$router.push('/menu')">GET STARTED</button>
  </div>
</template>

<script setup></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pangolin&family=Shantell+Sans:wght@400;600;800&display=swap");
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  background-color: #c4dcb8;
}

.home-container img {
  width: 200px;
  height: 200px;
  display: block;
}

.home-container h1 {
  font-family: "Shantell Sans", cursive;
  font-size: 40px;
  color: #fff;
  letter-spacing: 10px;
}

.home-container p {
  margin: 0;
  margin-top: -15px;
  font-family: "Pangolin", cursive;
  font-size: 18px;
  color: #fff;
  text-align: center;
  letter-spacing: 2px;
}

.home-container button {
  width: 60%;
  margin-top: 100px;
  padding: 20px 10px;
  border-radius: 14px;
  border: none;

  color: #f7b0a0;
  font-size: 28px;
  font-family: "Pangolin", cursive;
  font-weight: 700;
  letter-spacing: 2px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.home-container button:hover {
  background-color: #b2c9a6;
}
</style>

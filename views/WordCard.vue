<template>
  <div>
    <h1>Learn French</h1>
    <div class="shell">
      <div class="bar" :style="{ width: progress + '%' }">
        <span>
          <img id="frogbar" src="../assets/icons/frogbar.png" alt="" />
        </span>
      </div>
    </div>

    <div>
      <h2>Question :</h2>
      <p id="question">{{ gameData[currentQuestion].question }}</p>
      <div id="options">
        <div
          id="optionbox"
          v-for="(answer, index) in gameData[currentQuestion].answerOptions"
        >
          <button
            id="opbtn"
            v-bind:disabled="isSuccessVisible || isFailVisible"
            @click="checkAnswer(answer)"
          >
            {{ answer }}
          </button>
        </div>
      </div>
    </div>

    <div class="success" v-if="isSuccessVisible">
      <p>{{ message }}</p>

      <button @click="continuegame()">CONTINUE</button>
    </div>

    <div class="fail" v-if="isFailVisible">
      <p>{{ message }}</p>

      <button @click="continuegame()">SKIP</button>
    </div>

    <div class="endGame" v-if="isEndGameVisible">
      <p>
        Your level is : {{ this.totalSuccess + " of " + this.gameData.length }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "WordCardGame",
  data() {
    return {
      gameData: [
        {
          question: "How to say 'A boy' ?",
          answerOptions: ["Homme", "Garçon", "Fille"],
          solution: "Garçon",
        },
        {
          question: "How to say 'A girl' ?",
          answerOptions: ["Fille", "Ordinateur", "Homme"],
          solution: "Fille",
        },
        {
          question: "How to say 'A car' ?",
          answerOptions: ["Moto", "Voiture", "Avion"],
          solution: "Voiture",
        },

        {
          question: "How to say 'A frog' ?",
          answerOptions: ["Canard", "Grenouille", "Les nouilles"],
          solution: "Grenouille",
        },
      ],
      progress: 0,
      currentQuestion: 0,
      message: "",
      isSuccessVisible: false,
      isFailVisible: false,
      isEndGameVisible: false,
      totalSuccess: 0,
    };
  },
  methods: {
    makeProgress() {
      if (this.progress < 100) {
        this.progress += 25;
      }
    },

    checkAnswer(answer) {
      if (this.gameData[this.currentQuestion].solution == answer) {
        this.message = "Great !";
        this.isSuccessVisible = true;
        this.totalSuccess++;
        this.makeProgress();
      } else {
        this.message = "Nope !";
        this.isFailVisible = true;
      }

      if (this.currentQuestion >= this.gameData.length - 1) {
        this.isEndGameVisible = true;
        this.isSuccessVisible = false;
        this.isFailVisible = false;
      }
    },

    continuegame() {
      this.currentQuestion++;
      this.message = "";
      this.isSuccessVisible = false;
      this.isFailVisible = false;
    },
  },
};
</script>
<style scoped>
h1 {
  padding-top: 80px;
  font-family: "Shantell Sans", cursive;
  font-size: 40px;
  color: #2d2615;
  text-align: center;
  letter-spacing: 2px;
  margin: 0;
}

#frogbar {
  position: absolute;
  width: 28px;
  margin-left: -10px;
  margin-top: -8px;
}

.shell {
  height: 25px;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  border: 2px solid #fff;
  border-radius: 14px;
  padding: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.bar {
  margin-top: 2px;
  background: linear-gradient(to right, #b993d6, #8ca6db);
  height: 20px;
  width: 15px;
  border-radius: 9px;
}

.bar > span {
  float: right;
  padding: 4px 5px;
  color: #fff;
  font-size: 0.7em;
}

h2 {
  font-family: "Shantell Sans", cursive;
  font-size: 20px;
  color: #c3db8b;
  text-align: center;
  letter-spacing: 2px;
}

#question {
  font-family: "Shantell Sans", cursive;
  font-size: 24px;
  color: #2d2615;
  text-align: center;
  letter-spacing: 2px;
}

#options {
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
}

#optionbox {
  width: 200px;
  height: 100px;
  border: 2px solid #fff;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: #866461;
  cursor: pointer;
}

#opbtn {
  border: none;
  cursor: pointer;
  color: #2d2615;
  font-size: 28px;
  font-weight: 600;
  height: 100%;
  width: 100%;
  background-color: transparent;
  color: white;
}

.success {
  position: absolute;
  height: 100px;
  width: 100%;
  bottom: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 100px;
  background-color: #c3db8b;
}

.fail {
  position: absolute;
  height: 100px;
  width: 100%;
  bottom: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 100px;
  background-color: #c44434;
}

.endGame {
  position: absolute;
  height: 100px;
  width: 100%;
  bottom: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 100px;
  background-color: #e8b8af;
}

.success p {
  margin-left: 200px;
  color: #347632;
  font-size: 50px;
  font-family: "Delicious Handrawn", cursive;
  letter-spacing: 2px;
}

.fail p,
.endGame p {
  margin-left: 200px;
  color: #fff;
  font-size: 50px;
  font-family: "Delicious Handrawn", cursive;
  letter-spacing: 2px;
}

.success button,
.fail button {
  padding: 20px 20px;
  margin-left: 50px;
  color: #fff;
  border: 2px solid #ffffff55;
  background-color: #fbf8ba;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  font-family: "Shantell Sans", cursive;
  border-radius: 10px;
  color: #347632;
}

@media only screen and (max-width: 400px) {
  .fail p {
    margin-left: 100px;
  }

  .success p {
    margin-left: 60px;
  }

  .endGame p {
    margin-left: 60px;
    font-size: 30px;
  }

  #options {
    flex-direction: column;
  }

  #optionbox {
    margin-top: 20px;
  }
}
</style>

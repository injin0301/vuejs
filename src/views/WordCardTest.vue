<template>
  <div>
    <h1>Learn French</h1>

    <!-- Category selection -->
    <label for="category-select" class="category-select">Choose a category :</label>
    <select id="category-select" class="category-select" v-model="myCategory" @change="onChange()">
        <option value="basic">Basic</option>
        <option value="animals">Animals</option>
        <option value="development">Development</option>
    </select>

    <div class="shell">
      <div class="bar" :style="{ width: progress + '%' }">
        <span>
          <img id="frogbar" src="../assets/icons/frogbar.png" alt="" />
        </span>
      </div>
    </div>

    <div>
      <h2>Questions :</h2>
      <p id="question">{{ gameDataTest[myCategory][index].question }}</p> <!-- => gameDataTest.basic (basic est la valeur de la variable myCategorie)-->

      <!-- Aide -->
      <!-- <p>Solution : {{ gameDataTest[myCategory][index].solution }}</p> -->

      <!-- Choix -->
      <div id="options">
        <div id="optionbox" v-for="(answer, index) in gameDataTest[myCategory][index].answerOptions" >
          <button id="opbtn" v-bind:disabled="isSuccessVisible || isFailVisible" @click="checkAnswer(answer)">
            {{ answer }}
          </button>
        </div>
      </div>

    </div>

    <div class="success" v-if="isSuccessVisible">
      <p>{{ message }}</p>
    </div>

    <div class="fail" v-if="isFailVisible">
      <p>{{ message }}</p>
    </div>

    <div class="endGame" v-if="isEndGameVisible">
      <p>
        Your level is : {{ this.totalSuccess }}
      </p>
    </div>
  </div>
</template>
<script>
  // import { useCardDataStore } from '../store/card-data.js';

  // const storeCardData = useCardDataStore();

  export default {


    name: "WordCardGame",
    data() {
      
      return {

        myCategory : "basic", // Choix par défaut
        index : 0,

        gameDataTest: 
          {
            
            "basic" :  [
              {
                question: "How to say 'A boy' ?",
                answerOptions: ["Homme", "Garçon", "Fille"],
                solution: "Garçon",
              },
              {
                question: "How to say 'A girl' ?",
                answerOptions: ["Homme", "Garçon", "Fille"],
                solution: "Fille",
              }
            ],

            "animals" :  [
              {
                question: "How to say 'A cat' ?",
                answerOptions: ["Chat", "Chien", "Zèbre"],
                solution: "Chat",
              }
            ],

            "development" :  [
              {
                question: "Hello ...",
                answerOptions: ["There", "Guys", "World"],
                solution: "World",
              },
              {
                question: "List begins at ...",
                answerOptions: ["0", "1", "the top"],
                solution: "0",
              },
              {
                question: "Vue is the ?",
                answerOptions: ["Worst", "Best", "Meh"],
                solution: "Best",
              }
            ],

          },

        progress: 0,
        pourcentage: 0,
        message: "",
        isSuccessVisible: false,
        isFailVisible: false,
        isEndGameVisible: false,
        totalSuccess: 0,
        // cardDataStore: useCardDataStore(),
      };
    },
    methods: {

      onChange:function(){
        console.log(this.myCategory);
        this.index = 0;
        this.resetProgress();
        this.message = "";
        this.isSuccessVisible = false;
        this.isFailVisible = false;
        this.isEndGameVisible = false;
      },

      checkAnswer(answer) {

        // Question suivante
        if(this.index + 1 < this.gameDataTest[this.myCategory].length && this.gameDataTest[this.myCategory][this.index].solution == answer) {
          this.message = "Great !";
          this.isSuccessVisible = true;
          this.makeProgress();

          // Attendre 1,5s
          setTimeout(() => {
            this.index++;
            this.isSuccessVisible = false;
            this.message = "";
          }, 1500);

        } else if(this.gameDataTest[this.myCategory][this.index].solution != answer) { // Si réponse fausse
          this.message = "Nope !";
          this.isFailVisible = true;

          setTimeout(() => {
            this.isFailVisible = false;
            this.message = "";
          }, 1500);
        } else if(this.index + 1 >= this.gameDataTest[this.myCategory].length) { // Si dernière question
          this.message = "Great !";
          this.isSuccessVisible = true;
          this.makeProgress();
          setTimeout(() => {
            this.isSuccessVisible = false;
            this.isFailVisible = false;
            this.isEndGameVisible = true;
            setTimeout(() => {
              this.isEndGameVisible = false;
              this.index = 0;
              this.resetProgress();
            }, 2500);
          }, 1500);

        }



        // DEBUG
        /*
        console.log("index : " + this.index);

        // console.log(this.gameDataTest[this.myCategory].length - this.index); // nombre de questions
        if (this.index == 0) {
          console.log("numéro de la question");
          console.log(this.gameDataTest[this.myCategory].length - 1);
        } else {
          console.log("numéro de la question");
          console.log(this.gameDataTest[this.myCategory].length - this.index + 1);
        }

        console.log("question : " + this.gameDataTest[this.myCategory][this.index].question);

        console.log("nombre de questions :");
        console.log(this.gameDataTest[this.myCategory].length);
        */
        // DEBUG

      },
    

      // Ne progresse pas selon le nombre de questions
      makeProgress() {

        this.pourcentage = 100 / this.gameDataTest[this.myCategory].length;
        // console.log(100 / this.gameDataTest[this.myCategory].length);
        if (this.progress <= 100) {
          this.progress += this.pourcentage;
        }
      },

      resetProgress() {
        this.progress = 0;
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

.category-select {
  font-family: "Shantell Sans", cursive;
  margin: 10px 10px;
}

#category-select {
  background-color: #eee;
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
<template>
  <div class="matching-container">
    <div class="gameArea" v-if="cmp != 4">
      <div class="matching-box">
        <h1 id="result" :style="{ color: colorResult }">{{ result }}</h1>
        <h1 id="current">Currentely chosed : {{ currentValue }}</h1>
        <div class="boxHolder">
          <div class="box" v-for="(box, index) in boxData" :key="index">
            <button
              :class="box.show ? 'show' : ''"
              @click="showBox(index, box.value)"
            >
              <p v-if="!box.show">Click Here</p>
              <span v-if="box.show">{{ box.value }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    <button id="reloadbtn" v-if="cmp == 4" @click="newGame()">
      <img id="reload" src="../assets/icons/reload.png" alt="" />
      Play Again
    </button>
  </div>
</template>

<script>
export default {
  name: "MatchingCardGame",
  data() {
    return {
      boxData: this.shuffle([
        { id: 1, value: "🍤", show: false },
        { id: 2, value: "🍤", show: false },
        { id: 3, value: "🍒", show: false },
        { id: 4, value: "🍍", show: false },
        { id: 5, value: "🍒", show: false },
        { id: 6, value: "🍇", show: false },
        { id: 7, value: "🍇", show: false },
        { id: 8, value: "🍍", show: false },
      ]),
      currentValue: null,
      currentId: null,
      colorResult: null,
      result: "",
      cmp: 0,
    };
  },
  methods: {
    showBox(_id, _value) {
      console.log("values: ", this.currentValue, _value);
      this.boxData[_id].show = true;

      if (this.currentValue === null) {
        this.currentValue = _value;
        this.currentId = _id;
      } else if (_value === this.currentValue && _id != this.currentId) {
        this.result = "Great!";
        this.colorResult = "#668c54";
        this.cmp++;
        this.currentValue = null;
      } else {
        this.result = "Try again !";
        this.colorResult = "#c44434";
        this.boxData.map((box) => (box.show = false));
        this.currentValue = null;
        this.cmp = 0;
      }
    },
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    },
    newGame() {
      this.boxData = this.shuffle([
        { id: 1, value: "🍤", show: false },
        { id: 2, value: "🍤", show: false },
        { id: 3, value: "🍒", show: false },
        { id: 4, value: "🍍", show: false },
        { id: 5, value: "🍒", show: false },
        { id: 6, value: "🍇", show: false },
        { id: 7, value: "🍇", show: false },
        { id: 8, value: "🍍", show: false },
      ]);

      this.currentValue = null;
      this.currentId = null;
      this.colorResult = null;
      this.result = "";
      this.cmp = 0;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Pangolin&family=Quicksand:wght@600&family=Shantell+Sans:wght@400;600;800&display=swap");
* {
  transition: all 0.5s;
}

.matching-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.gameArea {
  width: 100%;
  float: left;
}

.matching-box {
  display: block;
  width: 800px;
  margin: 0 auto;
}

.box {
  width: 200px;
  float: left;
}

button p {
  margin-top: 46px;
  margin-bottom: 0;
  font-family: "Quicksand", sans-serif;
}

.box button {
  width: 100%;
  height: 130px;
  border: 1px solid #ccdcaa;
  border-radius: 0;
  background-color: #f7eed1;
}

.box button span {
  font-size: 50px;
  opacity: 1;
}

#result {
  margin: 0;
  text-align: center;
  font-size: 58px;
  font-family: "Delicious Handrawn", cursive;
  letter-spacing: 2px;
}

#current {
  font-family: "Quicksand", sans-serif;
}

#reloadbtn {
  background-color: transparent;
  border: none;
  width: 250px;
  height: 250px;

  color: #e8b8af;
  font-size: 30px;
  font-family: "Shantell Sans", cursive;
  font-weight: bold;
}

#reloadbtn img {
  display: block;
  width: 100%;
}

@media only screen and (max-width: 400px) {
  .matching-box {
    width: auto;
    padding: 10px;
  }

  .boxHolder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .box {
    width: 46%;
    padding: 5px;
  }

  #current {
    font-size: 20px;
    margin-left: 20px;
  }

  #result {
    font-size: 45px;
  }

  #reloadbtn {
    width: 150px;
    height: 150px;
  }
}
</style>

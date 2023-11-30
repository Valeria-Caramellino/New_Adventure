<script>


export default {
  name: "App",

  data() {
    return {
      audio: null,
      isPlay: false,
      isMuted: false,
    };
  },
  methods: {

    playPause() {
      if (this.audio.paused) {
        this.audio.play();
        this.isPlay = true;
      } else {
        this.audio.pause();
        this.isPlay = false;
      }

    },

    

    changeVolume() {

      this.isMuted = !this.isMuted;
      this.audio.volume = this.isMuted ? 0 : 1;
    },



  },
  mounted() {
    this.audio = this.$refs.myAudio;
  }
}
</script>

<template>
  <body>


    <router-view>

    </router-view>


    <audio ref="myAudio" loop>
      <source src="/canzone.mp3" type="audio/mp3">
     
    </audio>
    <div class="container-fluid sx">
      <div class="row ">

        <div class="my">
          <button @click="playPause" v-if="audio">
            <i :class="{ 'fa-solid fa-circle-play': !isPlay, 'fa-solid fa-circle-pause': isPlay }"></i>

          </button>
        </div>

      </div>
    </div>
    <div class="container-fluid dx">
      <div class="row">
        <div class="my">

          <button @click="changeVolume">
            <i :class="{ 'fa-solid fa-volume-low': !isMuted, 'fa-solid fa-volume-xmark': isMuted }"></i>
          </button>

        </div>
      </div>
    </div>



  </body>
</template>

<style lang="scss" scoped>
@use './style/style.scss' as*;

.container-fluid {
  width: 50px;
  position: fixed;
  top: 12%;
}

div.sx {
  left: 0%;
  
}

div.dx {
  right: 0%;

}

.my {

  //background-color: chartreuse;
  width: 45px;
  margin: auto;
  display: flex;
  justify-content: center;
  padding: 0.75rem;

  button {
    background-color: $orange;
  }
}
</style>
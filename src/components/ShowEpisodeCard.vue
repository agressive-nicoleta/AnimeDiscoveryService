<template>
  <div class="episode">
    <div class="episode-img">
      <img :src="`${poster}`" alt="Episode image" />
    </div>
    <div class="episode-description">
      <h2>{{ episodeName }}</h2>
      <p>Season {{ seasonNumber }} Episode {{ epNumber }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowEpisodeCard",
  props: {
    episodeName: String,
    poster: String,
    seasonNumber: Number,
    epNumber: Number,
  },
};
</script>

<style scoped>
.episode {
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  padding: 10px 10px 0px 10px;
  box-shadow: 3px 5px 4px #888888;
  font-family: var(--font-family);
  height: auto;
  width: 220px;
  margin-right: 30px;
  margin-bottom: 30px;
}
.episode-img img {
  max-width: 100%;
  height: auto;
}
.episode-description h2 {
  margin-top: 8px;
  font-size: 18px;
}
.episode-description p {
  top: 0px;
  margin-top: -8px;
  padding-bottom: 10px;
  font-size: 15px;
}
.card-box:hover {
  box-shadow: 5px 8px 30px black;
}
.episode:hover {
  box-shadow: 5px 8px 10px #888888;
}
</style>

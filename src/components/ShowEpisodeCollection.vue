<template>
  <div class="episode-box">
    <div class="episode-box cards">
      <p>Episodes</p>
      <div>
        <ShowEpisodeCard
          v-for="episode in episodeList"
          :key="episode.index"
          :episodeName="episode.title"
          :poster="episode.poster"
          :seasonNumber="episode.seasonNumber"
          :epNumber="episode.epNumber"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShowEpisodeCard from "./ShowEpisodeCard";
export default {
  name: "ShowEpisodeCollection",
  components: {
    ShowEpisodeCard,
  },
  props: {
    EpisodeName: String,
  },
  created: function () {
    this.id = this.$route.params.id;
    this.$store.dispatch("fetchEpisodes", { id: this.id });
  },
  computed: {
    episodeList: function () {
      return this.$store.state.show.episodesList;
    },
  },
};
</script>

<style scoped>
.episode-box {
  max-width: 1024px;
  margin: 0 auto;
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: var(--font-family);
}
.cards div {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
.cards p {
  font-weight: bold;
  font-size: 20px;
}
</style>

<template>
  <div>
    <div class="show-header container">
    <iframe :src="`https://www.youtube.com/embed/${anime.video}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
    <ShowDescriptionCard
      :poster="anime.poster"
      :animeId="anime.id"
      :showTitle="anime.title"
      :rating="anime.rating"
      :description="anime.synopsis"
      :nrEpisodes="anime.nrEpisodes"
    />
    <ShowEpisodeCollection />
    <ShowMetaCollection />
  </div>
</template>

<script>
import ShowDescriptionCard from "./components/ShowDescriptionCard";
import ShowEpisodeCollection from "./components/ShowEpisodeCollection";
import ShowMetaCollection from "./components/ShowMetaCollection";

export default {
  name: "ShowPage",
  components: {
    ShowDescriptionCard,
    ShowEpisodeCollection,
    ShowMetaCollection,
  },
  created: function () {
    this.id = this.$route.params.id;
    this.$store.dispatch("fetchShowAnimDescription", { id: this.id });
  },
  computed: {
    anime: function () {
      return this.$store.state.show.showCard;
    },
  },
};
</script>

<style scoped>
p {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 100px;
  height: 300px;
}
iframe{
  width: 100%;
  height: 460px;
}
</style>
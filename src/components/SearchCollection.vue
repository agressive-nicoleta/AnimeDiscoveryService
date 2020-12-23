<template>
  <div class="search-box">
    <div class="search-box cards">
      <p>{{ name }}</p>
      <div>
        <SearchCard
          v-for="anime in seriesList"
          :key="anime.index"
          :SearchCardName="seriesList.title"
          :rating="seriesList.averageRating"
          :description="seriesList.synopsis"
          :animeId="anime.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SearchCard from "./SearchCard";
export default {
  name: "SearchCollection",
  components: {
    SearchCard,
  },
  props: {
    name: String,
  },
  computed: {
    seriesList: function () {
      return this.$store.state.search.seriesList;
    },
    moviesList: function () {
      return this.$store.state.search.moviesList;
    },
  },
};
</script>

<style scoped>
.cards {
  max-width: 1024px;
  margin: 0 auto;
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: var(--font-family);
}
.cards ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
}
.cards li {
  list-style: none;
  padding-right: 20px;
  padding-bottom: 20px;
}
.cards p {
  font-weight: bold;
  font-size: 20px;
}
</style>

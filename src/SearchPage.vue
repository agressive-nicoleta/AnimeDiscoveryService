<template>
  <div>
    <SearchPageForm />
    <div class="search-box">
      <div class="search-box cards">
        <p>Series</p>
        <div class="search-collection">
          <SearchCard
            v-for="anime in seriesList"
            :key="anime.index"
            :SearchCardName="anime.title"
            :rating="anime.rating"
            :description="anime.synopsis"
            :animeId="anime.id"
            :image="anime.image"
          />
        </div>
      </div>
    </div>
    <div class="search-box">
      <div class="search-box cards">
        <p>Movies</p>
        <div class="search-collection">
          <SearchCard
            v-for="anime1 in moviesList"
            :key="anime1.index"
            :SearchCardName="anime1.title"
            :rating="anime1.rating"
            :description="anime1.synopsis"
            :animeId="anime1.id"
            :image="anime1.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchPageForm from "./components/SearchPageForm";
import SearchCard from "./components/SearchCard";
export default {
  name: "SearchPage",
  components: {
    SearchPageForm,
    SearchCard,
  },
  created: function () {
    this.$store.dispatch("fetchSearchAnimeCollection");
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
.search-collection {
  display: flex;
  flex-wrap: wrap;
}
</style>

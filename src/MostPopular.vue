<template>
  <div class="collection">
    <h1 class="title">Most popular</h1>
    <div class="anime-list">
      <BrowseCard
        v-for="anime in mostPopularList"
        :key="anime.index"
        :title="anime.title"
        :poster="anime.image"
        :type="anime.type"
        :animeId="anime.id"
      />
    </div>

    <div v-if="isLoading" class="loading">Is Loading</div>
    <div class="button-box">
      <button @click="handleShowMore" class="button">Show More</button>
    </div>
  </div>
</template>

<script>
import BrowseCard from "./components/BrowseCard";
export default {
  name: "SearchPage",
  components: {
    BrowseCard,
  },
  created: function () {
    this.$store.dispatch("fetchMostPopularCollection1");
  },
  computed: {
    mostPopularList: function () {
      return this.$store.state.categories.mostPopularList;
    },
    isLoading: function () {
      return this.$store.state.categories.isMostPopularLoading;
    },
  },
  methods: {
    handleShowMore: function () {
      this.$store.dispatch("fetchMostPopularCollection1");
    },
  },
};
</script>

<style scoped>
.collection {
  width: 1024px;
  margin: 0 auto;
}
.collection h1 {
  padding-top: 10px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.anime-list {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px 0;
}

.loading {
  animation: flash 5s ease infinite;
  font-size: 25px;
  text-align: center;
}

@keyframes flash {
  from {
    color: red;
  }
  to {
    color: green;
  }
}
.button-box {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
}
.button {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-size: 18px;
  padding: 14px 80px;
  text-decoration: none;
  outline: none;
  border: solid 2px #1A1A1C;
  border-radius: 3px;
  background-color: #4e4e50;
  transition: 0.5s;
  color: white;
  text-decoration: none;
}
.button:hover {
  --button-color: #1a1a1c;
  background-color: var(--button-color);
}
</style>

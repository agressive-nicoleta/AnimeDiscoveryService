<template>
  <div class="collection-box">
    <div class="collection">
      <BrowseHeaderCollection name="Most popular" link="most-popular" />
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
      <BrowseHeaderCollection name="Newest" link="newest" />
      <div class="anime-list">
        <BrowseCard
          v-for="anime1 in newestList"
          :key="anime1.index"
          :title="anime1.title"
          :poster="anime1.image"
          :type="anime1.type"
          :animeId="anime1.id"
        />
      </div>
      <BrowseHeaderCollection name="Recently updated" link="recently-updated" />
      <div class="anime-list">
        <BrowseCard v-for="anime2 in recentlyUpdatedList" 
        :key="anime2.index"
        :title="anime2.title" 
        :poster="anime2.image" 
        :type="anime2.type"
        :animeId="anime2.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BrowseHeaderCollection from "./BrowseHeaderCollection";
import BrowseCard from "./BrowseCard";

export default {
  name: "HeaderCollection",
  components: {
    BrowseHeaderCollection,
    BrowseCard,
  },
  created: function () {
    this.$store.dispatch("fetchMostPopularCollection");
    this.$store.dispatch("fetchNewestCollection");
    this.$store.dispatch("fetchRecentlyUpdatedCollection");
  },
  computed: {
    mostPopularList: function () {
      return this.$store.state.home.mostPopularList;
    },
    newestList: function () {
      return this.$store.state.home.newestList;
    },
    recentlyUpdatedList: function () {
      return this.$store.state.home.recentlyUpdatedList;
    },
  },
};
</script>

<style scoped>
.anime-list {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 0;
}
</style>
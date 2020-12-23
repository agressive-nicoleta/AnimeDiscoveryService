<template>
  <div class="description-card">
    <div class="search-image">
      <img :src="`${poster}`" alt="anime-name" />
    </div>
    <div class="search-right">
      <h3>{{ showTitle }}</h3>
      <p class="genres">Nr of episodes: {{nrEpisodes}}</p>
      <div class="rating">
        <p>{{ rating }} / 100</p>
        <span class="fa fa-star checked"></span>
      </div>
      <p class="description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowDescriptionCard",
  props: {
    poster: String,
    showTitle: String,
    rating: String,
    description: String,
    animeId: String,
    nrEpisodes: String,
  },
};
</script>

<style scoped>
.description-card {
  display: flex;
  height: 360px;
  width: 1024px;
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: var(--font-family);
  margin: 30px auto;
}
.checked {
  color: #f1094f;
}
.search-image {
  padding-right: 20px;
}
.search-image img {
  max-width: 100%;
  height: auto;
}
.search-right {
  width: 72%;
  float: right;
  padding-left: 20px;
  padding-right: 60px;
  font-size: 18px;
}
.search-right h3 {
  margin: 0 0 10px 0;
  font-size: 30px;
}
.description {
  text-indent: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
}
.rating {
  display: flex;
  margin-top: 6px;
}
.rating p {
  margin: 0;
  padding-right: 4px;
}
</style>
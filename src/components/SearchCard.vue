<template>
  <div class="search-card">
    <div class="search-image">
      <img :src="`${image}`" alt="anime-name" />
    </div>
    <div class="search-right">
      <h3>{{ SearchCardName }}</h3>
      <div class="rating">
        <p>{{ rating }} / 100</p>
        <span class="fa fa-star checked"></span>
      </div>
      <p>
        {{ description }}
      </p>
      <router-link :to="'/show/' + animeId">
        <button class="button">Watch</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchCard",
  props: {
    SearchCardName: String,
    rating: String,
    description: String,
    image: String,
    animeId: String,
  },
};
</script>

<style scoped>
.search-card {
  display: flex;
  height: 280px;
  width: 480px;
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: var(--font-family);
  background-color: #ebebeb;
  margin-bottom: 20px;
  margin-right: 20px;
}
.rating {
  display: flex;
  margin-top: 6px;
}
.rating p {
  margin: 0;
  padding-right: 4px;
}
.checked {
  color: #6f2232;
}
.search-image {
  padding: 10px 20px 20px 20px;
}
.search-image img {
  max-width: 100%;
  height: auto;
}
.search-right {
  float: right;
  padding-left: 6px;
  padding-right: 8px;
  width: 78%;
}
.search-right h3 {
  margin-bottom: 4px;
  font-size: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.search-right p {
  margin-bottom: 6px;
  margin-top: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
.button {
  display: inline-block;
  font-size: 14px;
  padding: 12px 54px;
  text-decoration: none;
  outline: none;
  border: solid 2px #1a1a1c;
  border-radius: 3px;
  background-color: #6f2232;
  transition: 0.4s;
  color: white;
  text-decoration: none;
}
.button:hover {
  --button-color: #1a1a1c;
  background-color: var(--button-color);
}
</style>

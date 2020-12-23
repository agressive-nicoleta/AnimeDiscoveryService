<template>
  <div>
    <router-link :to="'show/' + animeId" class="link">
      <div class="card-box">
        <img :src="`${poster}`" alt="Card name" />
        <div class="card-description">
          <h3>{{ title }}</h3>
          <p>{{ type }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "BrowseCard",
  props: {
    title: String,
    poster: String,
    type: String,
    animeId: String,
  },
};
</script>

<style scoped>
.card-box {
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  --border-color: #1a1a1c;
  width: 126px;
  padding: 10px 10px 0px 10px;
  box-shadow: 5px 10px 18px #888888;
  border: 2px solid var(--border-color);
  border-radius: 6px;
  font-family: var(--font-family);
  margin: 0 18px 14px 0;
}
.card-box img {
  max-width: 100%;
  height: auto;
}
.card-description h3 {
  margin-top: 0;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.card-description p {
  top: 0px;
  margin-top: -15px;
  font-size: 14px;
}
.card-box:hover {
  box-shadow: 5px 8px 30px black;
}
.link {
  text-decoration: none;
  color: #1A1A1C;
}
</style>
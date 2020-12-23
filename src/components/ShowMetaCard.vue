<template>
  <div class="meta-card">
    <img :src="`${poster}`" alt="image" />
    <div class="cast-name">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowMetaCard",
  props: {
    poster: String,
    name: String,
    description: String,
  },
};
</script>

<style scoped>
.meta-card {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  background-color: rgb(238, 238, 238);
  display: flex;
  height: 110px;
  width: 230px;
  margin-right: 20px;
  margin-bottom: 10px;
}
.meta-card img {
  width: 80px;
  height: 92px;
  margin: 6px;
  object-fit: cover;
  position: center;
  border: 3px solid grey;
  border-radius: 8px;
}
.cast-name {
  float: right;
  width: 50%;
}
.cast-name h3 {
  margin: 0;
  padding-top: 6px;
  font-size: 15px;
}
.cast-name p {
  margin-top: 6px;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>

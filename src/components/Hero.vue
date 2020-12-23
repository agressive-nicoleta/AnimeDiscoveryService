<template>
  <div class="header-container">
    <div class="hero">
      <div class="hero-left">
        <h2>{{ hero.title }}</h2>
        <p>{{ hero.description }}</p>
        <router-link :to="'/show/' + hero.id">
          <button class="button">Watch</button>
        </router-link>
      </div>
      <img :src="hero.image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
  created: function () {
    this.$store.dispatch("fetchHero");
  },
  computed: {
    hero: function () {
      return this.$store.state.home.hero;
    },
  },
};
</script>

<style scoped>
.header-container {
  background-color: #1A1A1C;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.hero {
  position: relative;
  display: flex;
  max-width: 1024px;
  height: 460px;
  margin: 0 auto;
}
.hero-left {
  position: absolute;
  z-index: 1;
  padding: 60px 0 0 20px;
  width: 70%;
}
input[type="text"] {
  --color: #4e4e50;
  background-color: var(--color);
  background-image: url("https://cdn.bitdegree.org/learn/search-icon.png?229dfb2d");
  background-size: 20px;
  background-position: 5px 5px;
  background-repeat: no-repeat;
  padding-left: 36px;
  color: white;
  border-radius: 10px;
  height: 30px;
  width: 300px;
}
.button {
  display: inline-block;
  font-size: 20px;
  padding: 16px 30px;
  text-decoration: none;
  outline: none;
  border: none;
  border-radius: 3px;
  background-color: #950741;
  color: white;
  transition: 0.7s;
}
.button:hover {
  --button-color: #c3083f;
  background-color: var(--button-color);
}
img {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  object-fit: cover;
  object-position: top;
  opacity: 0.4;
}
h2 {
  font-size: 34px;
}
p,
h2 {
  color: white;
}
.hero p {
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
@media only screen and (min-width: 100px) and (max-width: 900px) {
  input[type="text"] {
    width: 240px;
  }
  .hero-left {
    padding-left: 20px;
  }
  .image img {
    object-fit: cover;
    padding-left: 30px;
  }
}
</style>

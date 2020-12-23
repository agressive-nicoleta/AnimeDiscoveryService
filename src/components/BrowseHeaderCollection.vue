<template>
  <div class="browse-container">
    <div class="collection-name">
      <p>{{ name }}</p>
      <div class="see-more">
        <router-link :to="link">
          <p>see more</p>
          <i class="arrow"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrowseHeaderCollection",
  props: {
    name: String,
    link: String,
  },
};
</script>

<style scoped>
.browse-container {
  --border-color: #1A1A1C;
  --background-color: white;
  border: 5px solid var(--border-color);
  border-left-style: none;
  border-right-style: none;
  box-shadow: 1px 1px 12px #4E4E50 inset;
  background-color: var(--background-color);
}
.collection-name {
  height: 40px;
  display: flex;
  position: relative;
  max-width: 1024px;
  margin: 0 auto;
}
.see-more {
  display: flex;
  position: absolute;
  right: 20px;
  padding-top: 5px;
}
.collection-name p {
  --font-color: #1A1A1C;
  text-transform: uppercase;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: left;
  color: var(--font-color);
  margin: 10px 15px;
  font-size: 18px;
}
.see-more p {
  font-size: 12px;
  margin: auto;
  padding-right: 10px;
}
.see-more a {
  text-decoration: none;
  font-size: 30px;
  display: flex;
  padding-top: 6px;
}
.arrow {
  --arrow-color: #1A1A1C;
  border: solid var(--arrow-color);
  border-width: 0 4px 4px 0;
  display: inline-block;
  padding: 5px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
.see-more:hover {
  text-decoration: underline;
}
</style>

<template>
  <header class="header-style">
    <div class="header-text">
      <div class="logo">
        <router-link to="/">
          <img src="/assets/logo.jpg" alt="Logo">
        </router-link>
      </div>
      <div class="nav-links">
        <ul>
          <li>
            <router-link to="/most-popular" class="link">Most popular</router-link>
          </li>
          <li>
            <router-link to="/newest" class="link">Newest</router-link>
          </li>
          <li>
            <router-link to="recently-updated" class="link">Recently updated</router-link>
          </li>
        </ul>
        <div class="search-logo">
          <router-link to="/search">
            <img src="/assets/search.logo.png" alt="Logo">
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header-style {
  padding: 10px 0;
  --font-family: "Avenir", Helvetica, Arial, sans-serif;
  --font-color: #1A1A1C;
  --border-color: #1A1A1C;
  --background-color: white;
  border: 5px solid var(--border-color);
  box-shadow: 2px 2px 50px 10px var(--font-color) inset;
  background-color: var(--background-color);
}

.header-text {
  display: flex;
  max-width: 1024px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
  margin: 0 auto;
  font-family: var(--font-family);
  font-size: 19px;
  font-weight: bold;
}
.logo img {
  height: 60px;
  display: flex;
  padding: 0px;
  border-radius: 5px;
}
.search-logo img {
  height: 20px;
  padding: 0 30px;
}
.nav-links {
  display: flex;
}
.nav-links ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
  justify-content: center;
}
.link {
  text-decoration: none;
  color: var(--font-color);
  transition: color 0.3s;
}
.nav-links .link {
  margin-left: 50px;
  color: rgb(83, 83, 83);
}
header ul li .link:hover {
  color: #000;
}
@media only screen and (min-width: 100px) and (max-width: 800px) {
  .header-style {
    width: 100%;
  }
  .nav-links .link {
    margin-left: 10px;
    font-size: 12px;
  }
  .search-logo img {
    padding: 0 20px;
  }
}
</style>

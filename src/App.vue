<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: { Header, Footer },
  created: function(){
    axios.get('https://kitsu.io/api/edge/anime').
    then((result) => {console.log(result)});
  }
};
</script>

<style> 
</style>

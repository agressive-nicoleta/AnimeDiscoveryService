<template>
  <div class="cast-box">
    <h2>Characters</h2>
    <div>
      <ShowMetaCard
        v-for="character in charactersList"
        :key="character.index"
        :name="character.name"
        :description="character.description"
        :poster="character.poster"
      />
    </div>
  </div>
</template>

<script>
import ShowMetaCard from "./ShowMetaCard";
export default {
  name: "ShowMetaCollection",
  components: {
    ShowMetaCard,
  },
  created: function () {
    this.id = this.$route.params.id;
    this.$store.dispatch("fetchCharacters", { id: this.id });
  },
  computed: {
    charactersList: function () {
      return this.$store.state.show.charactersList;
    },
  },
};
</script>

<style scoped>
.cast-box {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 1024px;
  margin: 0 auto;
}
.cast-box div {
  display: flex;
  flex-wrap: wrap;
}
</style>

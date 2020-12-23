import axios from "axios";

const searchModule = {
  state: () => ({
    seriesList: [],
    moviesList: []
  }),
  mutations: {
    saveSearchAnime(state, { attributes, id }) {
      const searchCard = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id,
        subtype: attributes.subtype,
        rating: attributes.averageRating,
        synopsis: attributes.synopsis
      };
      if (searchCard.subtype === "movie") {
        state.moviesList.push(searchCard);
      } else if (searchCard.subtype === "TV") {
        state.seriesList.push(searchCard);
      }
    },
    resetSearchResults(state) {
      state.seriesList = [];
      state.moviesList = [];
    }
  },
  actions: {
    fetchSearchAnimeCollection(context, searchQuery) {
      const limit = 10;
      axios
        .get(
          `https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=0&filter%5Btext%5D=${searchQuery}`
        )
        .then(function ({ data }) {
          context.commit("resetSearchResults");
          data.data.forEach(function (item) {
            context.commit("saveSearchAnime", item);
          });
        });
    }
  }
};

export default searchModule;

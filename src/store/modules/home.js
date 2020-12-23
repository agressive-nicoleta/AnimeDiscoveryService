import axios from "axios";

const homeModule = {
  state: () => ({
    hero: {
      title: "",
      description: "",
      image: "",
      id: 0,
      slug: ""
    },
    mostPopular: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    newest: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    recentlyUpdated: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    mostPopularList: [],
    newestList: [],
    recentlyUpdatedList: []
  }),
  mutations: {
    saveHero: function (state, { attributes, id }) {
      state.hero = {
        title: attributes.canonicalTitle,
        description: attributes.description,
        image: attributes.coverImage.original,
        id: id,
        slug: attributes.slug
      };
    },
    saveMostPopular(state, { attributes, id }) {
      state.mostPopular = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        id: id,
        slug: attributes.slug,
        type: attributes.showType
      };
      state.mostPopularList.push(state.mostPopular);
    },
    saveNewest(state, { attributes, id }) {
      state.newest = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        id: id,
        slug: attributes.slug,
        type: attributes.showType
      };
      state.newestList.push(state.newest);
    },
    saveRecentlyUpdated(state, { attributes, id }) {
      state.recentlyUpdated = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        id: id,
        slug: attributes.slug,
        type: attributes.showType
      };
      state.recentlyUpdatedList.push(state.recentlyUpdated);
    }
  },
  actions: {
    fetchHero: function (context) {
      axios
        .get(
          "https://kitsu.io/api/edge/trending/anime?page[limit]=1&page[offset]=0&sort=-popularityRank"
        )
        .then(function ({ data }) {
          context.commit("saveHero", data.data[0]);
        });
    },
    fetchMostPopularCollection(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=popularityRank"
        )
        .then(function ({ data }) {
          for (let i = 0; i < 6; i++) {
            context.commit("saveMostPopular", data.data[i]);
          }
        });
    },
    fetchNewestCollection(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-createdAt"
        )
        .then(function ({ data }) {
          for (let i = 0; i < 6; i++) {
            context.commit("saveNewest", data.data[i]);
          }
        });
    },
    fetchRecentlyUpdatedCollection(context) {
      axios
        .get(
          "https://kitsu.io/api/edge/anime?page[limit]=6&page[offset]=0&sort=-updatedAt"
        )
        .then(function ({ data }) {
          for (let i = 0; i < 6; i++) {
            context.commit("saveRecentlyUpdated", data.data[i]);
          }
        });
    }
  }
};

export default homeModule;

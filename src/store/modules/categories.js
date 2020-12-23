import axios from "axios";

const categoriesModule = {
  state: () => ({
    isMostPopularLoading: false,
    mostPopular: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    isNewestLoading: false,
    newest: {
      title: "",
      image: "",
      id: 0,
      slug: "",
      type: ""
    },
    isRecentlyUpdatedLoading: false,
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
    setIsLoading(state, { propName, value }) {
      state[propName] = value;
    },
    saveMostPopular1(state, { attributes, id }) {
      state.mostPopular = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        slug: attributes.slug,
        id: id,
        type: attributes.showType
      };
      state.mostPopularList.push(state.mostPopular);
    },
    saveNewest1(state, { attributes, id }) {
      state.newest = {
        title: attributes.canonicalTitle,
        image: attributes.posterImage.small,
        id: id,
        slug: attributes.slug,
        type: attributes.showType
      };
      state.newestList.push(state.newest);
    },
    saveRecentlyUpdated1(state, { attributes, id }) {
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
    fetchMostPopularCollection1(context) {
      const limit = 18;
      const offset = context.state.mostPopularList.length;

      context.commit("setIsLoading", {
        propName: "isMostPopularLoading",
        value: true
      });

      axios
        .get(
          `https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=${limit}&page[offset]=${offset}`
        )
        .then(function ({ data }) {
          data.data.forEach(function (item) {
            context.commit("saveMostPopular1", item);
          });

          context.commit("setIsLoading", {
            propName: "isMostPopularLoading",
            value: false
          });
        });
    },
    fetchNewestCollection1(context) {
      const limit = 18;
      const offset = context.state.newestList.length;

      context.commit("setIsLoading", {
        propName: "isNewestLoading",
        value: true
      });

      axios
        .get(
          `https://kitsu.io/api/edge/anime?sort=-createdAt&page[limit]=${limit}&page[offset]=${offset}`
        )
        .then(function ({ data }) {
          data.data.forEach(function (item) {
            context.commit("saveNewest1", item);
          });

          context.commit("setIsLoading", {
            propName: "isNewestLoading",
            value: false
          });
        });
    },
    fetchRecentlyUpdatedCollection1(context) {
      const limit = 18;
      const offset = context.state.recentlyUpdatedList.length;

      context.commit("setIsLoading", {
        propName: "isRecentlyUpdatedLoading",
        value: true
      });

      axios
        .get(
          `https://kitsu.io/api/edge/anime?sort=-updatedAt&page[limit]=${limit}&page[offset]=${offset}`
        )
        .then(function ({ data }) {
          data.data.forEach(function (item) {
            context.commit("saveRecentlyUpdated1", item);
          });

          context.commit("setIsLoading", {
            propName: "isRecentlyUpdatedLoading",
            value: false
          });
        });
    }
  }
};

export default categoriesModule;

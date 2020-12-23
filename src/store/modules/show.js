import axios from "axios";

const showModule = {
  state: () => ({
    showCard: {
      title: "",
      description: "",
      image: "",
      id: 1,
      slug: "",
      synopsis: "",
      rating: "",
      nrEpisodes: "",
      video: ""
    },
    episodesList: [],
    charactersList: []
  }),
  mutations: {
    saveShowDescription(state, { attributes, id }) {
      state.showCard = {
        title: attributes.canonicalTitle,
        poster: attributes.posterImage.small,
        slug: attributes.slug,
        id: id,
        rating: attributes.averageRating,
        synopsis: attributes.synopsis,
        nrEpisodes: attributes.episodeCount,
        video: attributes.youtubeVideoId
      };
    },
    saveEpisodes(state, { attributes }) {
      const episode = {
        title: attributes.canonicalTitle,
        poster: attributes.thumbnail.original,
        seasonNumber: attributes.seasonNumber,
        epNumber: attributes.number
      };
      state.episodesList.push(episode);
    },
    resetEpisodes(state) {
      state.episodesList = [];
    },
    saveCharacters(state, { attributes }) {
      const character = {
        name: attributes.canonicalName,
        poster: attributes.image.original,
        description: attributes.description
      };
      state.charactersList.push(character);
    },
    resetCharacters(state) {
      state.charctersList = [];
    }
  },
  actions: {
    fetchShowAnimDescription(context, payload) {
      const id = payload.id;
      axios
        .get(`https://kitsu.io/api/edge/anime?filter[id]=${id}`)
        .then(function ({ data }) {
          context.commit("saveShowDescription", data.data[0]);
        });
    },
    fetchEpisodes(context, payload) {
      const id = payload.id;
      axios
        .get(`https://kitsu.io/api/edge/anime/${id}/episodes`)
        .then(function ({ data }) {
          context.commit("resetEpisodes");
          data.data.forEach(function (item) {
            context.commit("saveEpisodes", item);
          });
        });
    },
    fetchCharacters(context, payload) {
      const id = payload.id;
      axios
        .get(`https://kitsu.io/api/edge/anime/${id}/characters`)
        .then(function ({ data }) {
          data.data.forEach(function (item) {
            axios
              .get(item.relationships.character.links.related)
              .then(function ({ data }) {
                context.commit("resetCharacters");
                context.commit("saveCharacters", data.data);
              });
          });
        });
    }
  }
};

export default showModule;

import Vuex from 'vuex';
import Vue from 'vue';
import actions from './actions.js';
import mutations from './mutations.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    articles: [],
    topPosts: [],
    subreddits: [],
    jobPosts: [],
    projectPosts: [],
    amaPosts: [],
    postDetails: {},
    comments: [],
  },
  mutations,
  actions,
});

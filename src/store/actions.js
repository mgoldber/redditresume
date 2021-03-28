import axios from 'axios';

const url = process.env.VUE_APP_API_URL;
export default {
  fetch_top_posts: ({ commit }) => {
    axios
      .get(`${url}api/v1/post/top`)
      .then(resp => {
        // posts should already be sorted by vote, if not fix here
        resp.data = resp.data.sort(function(a, b) {
          return b['votes'] - a['votes'];
        });
        resp.data.forEach(post => {
          commit('APPEND_TOP_POST', post);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_all_subreddits: ({ commit }) => {
    axios
      .get(`${url}api/v1/subreddit`)
      .then(resp => {
        resp.data.forEach(subreddit => {
          // Capitalize the first letter of the subreddit name
          subreddit.name =
            subreddit.name.charAt(0).toUpperCase() + subreddit.name.slice(1);
          commit('APPEND_SUBREDDIT', subreddit);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_posts_for_jobs: ({ commit }, subredditId) => {
    axios
      .get(`${url}api/v1/post/subreddit/${subredditId.subredditId}`)
      .then(resp => {
        // ensure that the posts are sorted by votes
        resp.data = resp.data.sort(function(a, b) {
          return b['votes'] - a['votes'];
        });
        resp.data.forEach(post => {
          commit('APPEND_JOB_POST', post);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_posts_for_projects: ({ commit }, subredditId) => {
    axios
      .get(`${url}api/v1/post/subreddit/${subredditId.subredditId}`)
      .then(resp => {
        resp.data.forEach(post => {
          commit('APPEND_PROJECTS_POST', post);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  fetch_posts_for_ama: ({ commit }, subredditId) => {
    axios
      .get(`${url}api/v1/post/subreddit/${subredditId.subredditId}`)
      .then(resp => {
        resp.data.forEach(post => {
          commit('APPEND_AMA_POST', post);
        });
      })
      .catch(err => {
        console.log(err);
      });
  },
  send_comment_form: ({ commit }, comment) => {
    axios
      .post(`${url}api/v1/contact`, {
        name: comment.name,
        comment: comment.comment
      })
      .then(() => {
        commit('APPEND_SUBMITTED_COMMENT', {
          name: comment.name,
          comment: comment.comment
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
};

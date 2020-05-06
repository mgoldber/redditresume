import axios from 'axios';

export default {
  fetch_top_posts: ({ commit }) => {
    axios
      .get('http://localhost:8080/api/v1/post/top')
      .then(resp => {
        resp.data.forEach(post => {
          commit('APPEND_TOP_POST', post);
        });
      })
      .catch(err => {
        console.log(err);
      })
  },
  fetch_all_subreddits: ({ commit }) => {
    axios
      .get('http://localhost:8080/api/v1/subreddit')
      .then(resp => {
        resp.data.forEach(subreddit => {
          commit('APPEND_SUBREDDIT', subreddit);
        })
      })
      .catch(err => {
        console.log(err);
      })
  },
  fetch_posts_for_jobs: ({ commit }, subredditId) => {
    axios
      .get(`http://localhost:8080/api/v1/post/subreddit/${subredditId.subredditId}`)
      .then(resp => {
        resp.data.forEach(post => {
          commit('APPEND_JOB_POST', post);
        })
      })
      .catch(err => {
        console.log(err);
      })
  },
  fetch_posts_for_projects: ({ commit }, subredditId) => {
    axios
      .get(`http://localhost:8080/api/v1/post/subreddit/${subredditId.subredditId}`)
      .then(resp => {
        resp.data.forEach(post => {
          commit('APPEND_PROJECTS_POST', post);
        })
      })
      .catch(err => {
        console.log(err);
      })
  },
  fetch_posts_for_ama: ({ commit }, subredditId) => {
    axios
      .get(`http://localhost:8080/api/v1/post/subreddit/${subredditId.subredditId}`)
      .then(resp => {
        resp.data.forEach(post => {
          commit('APPEND_AMA_POST', post);
        })
      })
      .catch(err => {
        console.log(err);
      })
  },
  send_comment_form: ({ commit }, comment) => {
    axios
      .post(`http://localhost:8080/api/v1/contact`, {
        name: comment.name,
        comment: comment.comment
      })
      .then(() => {
        commit('APPEND_SUBMITTED_COMMENT', { name: comment.name, comment: comment.comment });
      })
      .catch(err => {
        console.log(err);
      })
  }
};

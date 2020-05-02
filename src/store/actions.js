import axios from 'axios';

export default {
  fetch_top_stories: ({ commit }) => {
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(resp => {
        let results = resp.data.slice(0, 25);
        results.forEach(element => {
          axios
            .get(
              'https://hacker-news.firebaseio.com/v0/item/' + element + '.json'
            )
            .then(result => {
              commit('APPEND_TOP_STORY', result);
            })
            .catch(err => {
              console.log(err);
            });
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
        console.log(resp);
        resp.data.forEach(subreddit => {
          commit('APPEND_SUBREDDIT', subreddit);
        })
      })
      .catch(err => {
        console.log(err);
      })
  },
  fetch_posts_for_subreddit: ({ commit }, subredditId) => {
    axios
      .get(`http://localhost:8080/api/v1/${subredditId}`)
      .then(resp => {
        console.log(resp)
        commit('APPEND_SUBREDDIT_POST', resp);
      })
  }
};

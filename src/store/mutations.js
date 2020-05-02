export default {
  APPEND_TOP_STORY: (state, article) => {
    state.topStories.push(article);
  },
  APPEND_SUBREDDIT: (state, subreddit) => {
    state.subreddits.push(subreddit);
  },
  APPEND_SUBREDDIT_POST: (state, post) => {
    state.posts.push(post);
  }
};

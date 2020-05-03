export default {
  APPEND_TOP_POST: (state, post) => {
    state.topPosts.push(post);
  },
  APPEND_SUBREDDIT: (state, subreddit) => {
    state.subreddits.push(subreddit);
  },
  APPEND_SUBREDDIT_POST: (state, jobPost) => {
    state.jobPosts.push(jobPost);
  }
};

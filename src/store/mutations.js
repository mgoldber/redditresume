export default {
  APPEND_TOP_POST: (state, post) => {
    state.topPosts.push(post);
  },
  APPEND_SUBREDDIT: (state, subreddit) => {
    state.subreddits.push(subreddit);
  },
  APPEND_JOB_POST: (state, post) => {
    state.jobPosts.push(post);
  },
  APPEND_PROJECTS_POST: (state, post) => {
    state.projectPosts.push(post);
  },
  APPEND_AMA_POST: (state, post) => {
    state.amaPosts.push(post);
  },
  APPEND_SUBMITTED_COMMENT: (state, comment) => {
    state.comments.push(comment)
  }
};

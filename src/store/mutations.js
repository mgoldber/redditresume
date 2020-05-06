export default {
  APPEND_TOP_POST: (state, post) => {
    state.topPosts.push(post);
  },
  APPEND_SUBREDDIT: (state, subreddit) => {
    state.subreddits.push(subreddit);
  },
  APPEND_SUBREDDIT_POST: (state, post) => {
    if (post.subredditId === "5eace3b8ae597e015df7e1e4") state.posts.projectPosts.push(post);
    if (post.subredditId === "5eace3adae597e015df7e1e2") state.posts.podcastPosts.push(post);
    if (post.subredditId === "5eace3bdae597e015df7e1e5") state.posts.amaPosts.push(post);
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

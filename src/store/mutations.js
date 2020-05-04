export default {
  APPEND_TOP_POST: (state, post) => {
    state.topPosts.push(post);
  },
  APPEND_SUBREDDIT: (state, subreddit) => {
    state.subreddits.push(subreddit);
  },
  APPEND_SUBREDDIT_POST: (state, post) => {
    if (post.subredditId === "5eace3a8ae597e015df7e1e1") state.posts.jobPosts.push(post);
    if (post.subredditId === "5eace3b8ae597e015df7e1e4") state.posts.projectPosts.push(post);
    if (post.subredditId === "5eace3adae597e015df7e1e2") state.posts.podcastPosts.push(post);
  }
};

<template>
  <div class="projects">
    <apost v-for="post in projectPosts" :key="post._id" :post="post"></apost>
  </div>
</template>

<script>
  import APost from '@/components/cards/APost.vue';

  export default {
    name: "TheProjectsPage",
    components: {
      'apost': APost,
    },
    data: function() {
      return {
        err: "",
        projectPosts: this.$store.state.posts.projectPosts,
      };
    },
    created: function() {
      if (this.$store.state.posts.projectPosts.length === 0) this.$store.dispatch('fetch_posts_for_subreddit', { subredditId: '5eace3b8ae597e015df7e1e4' })
    }
  }
</script>

<style scoped>
  .projects {
    margin-top: 75px;
  }
</style>

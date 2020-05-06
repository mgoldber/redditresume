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
        projectPosts: this.$store.state.projectPosts,
      };
    },
    created: function() {
      if (this.$store.state.projectPosts.length === 0) this.$store.dispatch('fetch_posts_for_projects', { subredditId: this.$route.params.subredditId });
    }
  }
</script>

<style scoped>
  .projects {
    margin-top: 75px;
  }
</style>

<template>
  <div class="jobs">
    <apost v-for="post in jobPosts" :key="post._id" :post="post"></apost>
  </div>
</template>

<script>
  import APost from '@/components/cards/APost.vue';

  export default {
    name: "TheJobsPage",
    components: {
      'apost': APost,
    },
    data: function() {
      return {
        err: "",
        jobPosts: this.$store.state.jobPosts,
      };
    },
    created: function() {
      if (this.$store.state.jobPosts.length === 0) this.$store.dispatch('fetch_posts_for_subreddit', { subredditId: '5eace3a8ae597e015df7e1e1' })
    }
  }
</script>

<style scoped>
  .jobs {
    margin-top: 75px;
  }
</style>

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
      if (this.$store.state.jobPosts.length === 0) this.$store.dispatch('fetch_posts_for_jobs', { subredditId: this.$route.params.subredditId })
    },
  }
</script>

<style scoped>
  .jobs {
    margin-top: 75px;
  }
</style>

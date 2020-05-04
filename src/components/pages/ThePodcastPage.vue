<template>
  <div class="podcasts">
    <apost v-for="post in podcastPosts" :key="post._id" :post="post"></apost>
  </div>
</template>

<script>
  import APost from '@/components/cards/APost.vue';

  export default {
    name: "ThePodcastPage",
    components: {
      'apost': APost,
    },
    data: function() {
      return {
        err: "",
        podcastPosts: this.$store.state.posts.podcastPosts,
      }
    },
    created: function() {
      if (this.$store.state.posts.podcastPosts.length === 0) this.$store.dispatch('fetch_posts_for_subreddit', { subredditId: '5eace3adae597e015df7e1e2' })
    }
  }
</script>

<style scoped>
  .podcasts {
    margin-top: 75px;
  }
</style>
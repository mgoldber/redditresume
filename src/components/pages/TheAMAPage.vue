<template>
  <div class="ama">
    <apost v-for="post in amaPosts" :key="post._id" :post="post"></apost>
  </div>
</template>

<script>
  import APost from '@/components/cards/APost.vue'

  export default {
    name: "TheAMAPage",
    components: {
      'apost': APost,
    },
    data: function() {
      return {
        err: "",
        amaPosts: this.$store.state.posts.amaPosts,
      }
    },
    created: function() {
      if (this.$store.state.posts.amaPosts.length === 0) this.$store.dispatch('fetch_posts_for_subreddit', { subredditId: '5eace3bdae597e015df7e1e5' })
    }
  }
</script>

<style scoped>
  .ama {
    margin-top: 75px;
  }
</style>

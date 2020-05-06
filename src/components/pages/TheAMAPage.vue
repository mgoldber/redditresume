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
        amaPosts: this.$store.state.amaPosts,
      }
    },
    created: function() {
      if (this.$store.state.amaPosts.length === 0) this.$store.dispatch('fetch_posts_for_ama', { subredditId: this.$route.params.subredditId })
    }
  }
</script>

<style scoped>
  .ama {
    margin-top: 75px;
  }
</style>

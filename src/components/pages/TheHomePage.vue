<template>
  <div class="home">
    <apost v-for="post in posts" :key="post._id" :post="post"></apost>
  </div>
</template>

<script>
  import APost from '@/components/cards/APost.vue';

  export default {
    name: "TheHomePage",
    components: {
      'apost': APost,
    },
    data: function() {
      return {
        err: "",
        posts: this.$store.state.topPosts,
      };
    },
    created: function() {
      if (this.$store.state.topPosts.length === 0) this.$store.dispatch('fetch_top_posts');
    }
  }
</script>

<style scoped>
  .home {
    margin-top: 75px;
  }
</style>

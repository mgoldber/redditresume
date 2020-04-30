<template>
  <v-app class="container">
    <navbar></navbar>
    <home></home>
  </v-app>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Home from '@/components/Home'

  export default {
    name: 'App',

    components: {
      Navbar,
      Home
    },

    data: () => ({
      //
    }),
  };
</script>

<style scoped>
  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
</style>

<template>
  <v-app class="container">
    <navbar></navbar>
    <router-view />
  </v-app>
</template>

<script>
  import Navbar from '@/components/menus/Navbar'

  export default {
    name: 'App',
    components: {
      Navbar,
    },
    mounted: function() {
      this.test()
    },
    methods: {
      test() {
        console.log("WTF");
      }
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
    background: transparent !important
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
      width: 800px;
    }
  }
</style>

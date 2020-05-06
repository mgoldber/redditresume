<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <span class="icon"><v-icon>mdi-reddit</v-icon></span>
    <v-toolbar-title :style="{cursor: 'pointer'}" @click="$router.push('/')">MEDDIT</v-toolbar-title>
    <v-menu
      v-model="communities"
      :disabled="disabled"
      :absolute="absolute"
      :open-on-hover="openOnHover"
      :close-on-click="closeOnClick"
      :close-on-content-click="closeOnContentClick"
      :offset-x="offsetX"
      :offset-y="offsetY"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
          depressed
          class="subredditBtn"
        >
          <v-icon left>mdi-ufo-outline</v-icon>
          {{ currentSubreddit }}
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in subreddits"
          :key="index"
          @click="setSubreddit(item.name)"
          :to="'/' + item.name.slice(2) + '/' + item._id"
          replace
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer />

    <v-spacer />
    <v-menu
      v-model="user"
      :disabled="disabled"
      :absolute="absolute"
      :open-on-hover="openOnHover"
      :close-on-click="closeOnClick"
      :close-on-content-click="closeOnContentClick"
      :offset-x="offsetX"
      :offset-y="offsetY"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
          depressed
        >
          MarkG
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  export default {
    name: "Navbar",
    data: function() {
      return {
        items: [
          { title: 'My Profile' },
          { title: 'User Settings' },
          { title: 'Night Mode' },
          { title: 'Reddit Coins' },
        ],
        subreddits: this.$store.state.subreddits,
        currentSubreddit: this.getSubreddit(),
        disabled: false,
        absolute: false,
        openOnHover: false,
        user: false,
        communities: false,
        closeOnClick: true,
        closeOnContentClick: true,
        offsetX: false,
        offsetY: true,
      }
    },
    created: function() {
      if (this.$store.state.subreddits.length === 0) this.$store.dispatch('fetch_all_subreddits');
    },
    watch: {
      $route(to) {
        if (to.name === "ADetailedPost") {
          this.setSubreddit(to.params.subredditName);
        } 
        else if (to.name === "homeSub") {
          this.setSubreddit('r/home')
        }
        else {
          this.setSubreddit(to.name)
        }
      }
    },
    methods: {
      setSubreddit(title) {
        this.currentSubreddit = title;
      },
      getSubreddit() {
        return this.$route.name === 'ADetailedPost' ? this.$route.params.subredditName :  this.$route.name === 'homeSub' ? 'r/home' : 'r/' + this.$route.name
      }
    },
  }
</script>

<style scoped>
  .icon-container {
    margin-right: 50px;
  }
  .icon {
    margin-right: 7px;
  }
  .pure-menu {
    background-color: #ffffff;
  }
  .pure-menu a {
    color: 000000;
  }
  .subredditBtn {
    width: 200px;
  }
</style>

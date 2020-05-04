<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class=icon-container>
      <span class="icon"><v-icon>mdi-reddit</v-icon></span>
      <span>MEDDIT</span>
    </div>
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
          :to="'/' + item.name.slice(2)"
          replace
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-spacer />
    <v-text-field
      solo-inverted
      flat
      hide-details
      label="Search"
    />

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
      console.log(this.$route)
      return {
        items: [
          { title: 'My Profile' },
          { title: 'User Settings' },
          { title: 'Night Mode' },
          { title: 'Reddit Coins' },
        ],
        subreddits: this.$store.state.subreddits,
        currentSubreddit: this.$route.name === "ADetailedPost" ? 'r/jobs' : this.$route.name,
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
      $route(to, from) {
        console.log(from);
        if (to.name === "ADetailedPost") {
          this.setSubreddit('r/jobs');
        } else {
          this.setSubreddit(to.name)
        }
      }
    },
    methods: {
      setSubreddit(title) {
        this.currentSubreddit = title;
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

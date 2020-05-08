<template>
  <v-app-bar
    app
    color="white"
  >
    <span class="icon"><v-icon @click="$router.push('/')">mdi-rabbit</v-icon></span>
    <v-toolbar-title :style="{ cursor: 'pointer' }" class="website-name" color="primary" @click="$router.push('/')">MARKIT</v-toolbar-title>
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
          color="transparent"
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
          :to="'/' + item.name + '/' + item._id"
          replace
        >
          <v-list-item-icon>
            <v-icon v-text="getSubredditIcon(item.name)"></v-icon>
          </v-list-item-icon>
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
          color="transparent"
          v-on="on"
          depressed
        >
          MarkG
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :href="item.url"
            :target="item.title === 'Email' ? '' : '_blank'"
          >
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
  export default {
    name: "Navbar",
    data: function() {
      return {
        item: 1,
        items: [
          { title: 'LinkedIn', icon: 'mdi-linkedin', url: 'https://www.linkedin.com/in/markdgoldberg/' },
          { title: 'Twitter', icon: 'mdi-twitter', url: 'https://twitter.com/mgoldber' },
          { title: 'GitHub', icon: 'mdi-github', url: 'https://github.com/mgoldber' },
          { title: 'Email', icon: 'mdi-email', url: 'mailto:hello@goldbergmark.com' },
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
          this.setSubreddit('Home')
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
        return this.$route.name === 'ADetailedPost' ? this.$route.params.subredditName :  this.$route.name === 'homeSub' ? 'Home' : this.capitalizeFirst(this.$route.name)
      },
      capitalizeFirst(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      },
      getSubredditIcon(subreddit) {
        switch (subreddit) {
          case 'Home':
            return 'mdi-rabbit'
          case 'Jobs':
            return 'mdi-briefcase'
          case 'Projects':
            return 'mdi-code-braces'
          case 'AMA':
            return 'mdi-account-heart'
          default:
            return 'mdi-rabbit'
        }
      }
    },
  }
</script>

<style scoped>
  .icon-container {
    margin-right: 60px;
  }
  .website-name {
    margin-right: 35px;
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

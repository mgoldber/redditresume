<template>
    <v-card
      class="mx-auto post-card"
      flat
      outlined
      max-width="750"
      link
      hover
      :to="{ path: '/post/' + post.subredditName + '/' + post._id }"
    >
      <v-container fluid>
        <v-row justify="space-between">
          <v-col 
            cols="12" 
            md="1" 
            sm="1" 
            xs="1" 
            class="fill-height hidden-sm-and-down content-card upvote-bar"
          >
            <v-row
              class="flex-column ma-0"
              no-gutters
            >
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-arrow-up-bold</v-icon>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <span>{{ post.votes }}</span>
                </v-btn>
              </v-col>
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-arrow-down-bold</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          
          <v-col
            cols="12"
            md="11"
            sm="11"
            xs="11"
            class="content-card"
          >
            <v-row
              class="flex-column ma-1 fill-height"
            >
              <v-card-subtitle class="pb-0 content-card" :class="{'pl-3': $vuetify.breakpoint.smAndDown}"><v-icon v-text="getSubredditIcon(post.subredditName)"></v-icon> m/{{ capitalizeFirst(post.subredditName) }} • Posted by u/{{ post.author }} • {{ post.dateRange }}</v-card-subtitle>

              <v-card-text v-if="show" class="text--primary heading" :class="{'pl-3': $vuetify.breakpoint.smAndDown}">
                <div>{{ post.title }}</div>
              </v-card-text>
              <v-img 
                v-if="show"
                class="white--text"
                height="300px"
                contain
                :src="getImageUrl.icon"
              >
              </v-img>
              <div v-else class="d-flex flex-no-wrap justify-space-between">
                <v-card-text class="text--primary heading" :class="{'pl-3': $vuetify.breakpoint.smAndDown}">
                  <div>{{ post.title }}</div> 
                </v-card-text>

                <v-avatar
                  class="ma-3"
                  size="130"
                  tile
                >
                  <v-img 
                    :src="getImageUrl.icon">
                  </v-img>
                </v-avatar>
              </div>

              <thepostactions :post="post" :isDetailed="false" :numOfComments="post.comments.length" />
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script>
  import ThePostActions from '@/components/cards/ThePostActions.vue';

  export default {
    name: 'APost',
    components: {
      'thepostactions': ThePostActions
    },
    props: ["post", "subreddit"],
    data: function() {
      return {
        err: "",
        show: false
      }
    },
    computed: {
      getImageUrl() {
        return {
          ...this.post,
          icon: require('@/assets/' + this.post.img)
        }
      }
    },
    created: function() {
      // Change the format of the post based on the subreddit that the post is made in
      if (this.post.subredditName !== 'jobs') this.show = true;
    },
    methods: {
      capitalizeFirst(name) {
        return name.charAt(0).toUpperCase() + name.slice(1);
      },
      getSubredditIcon(subreddit) {
        subreddit = this.capitalizeFirst(subreddit)
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
    }
  };
</script>

<style scoped>
  .post-card {
    margin-bottom: 20px;
  }
  .content-card {
    padding-top: 0;
    padding-left: 0;
  }
  .upvote-bar {
    background-color: '#ffffff';
    padding-left: 10px;
  }
  .heading {
    margin-top: 10px;
    font-size: 18px;
    padding-left: 0;
  }
  .title {
    font-size: 24px;
  }
</style>

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
              <v-card-subtitle class="pb-0 content-card"><v-icon>mdi-reddit</v-icon> r/{{ post.subredditName }} • Posted by u/{{ post.author }} • {{ post.dateRange }}</v-card-subtitle>

              <v-card-text v-if="show" class="text--primary heading">
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
                <v-card-text class="text--primary heading">
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

              <v-card-actions>
                <v-row
                  class="actions-row"
                  align="center"
                >
                  <span v-show="$vuetify.breakpoint.smAndDown" class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-arrow-up-bold</v-icon></span>
                  <span v-show="$vuetify.breakpoint.smAndDown" class="subheading mr-2 interactive-item">{{ post.votes }}</span>
                  <span v-show="$vuetify.breakpoint.smAndDown" class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-arrow-down-bold</v-icon></span>
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-comment</v-icon>{{ post.comments.length }} comments</span>
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-seal</v-icon>Give award</span>
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-share</v-icon>Share</span>
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-bookmark-plus</v-icon>Save</span>
                </v-row>
              </v-card-actions>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script>
  export default {
    name: 'APost',
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
    }
  };
</script>

<style scoped>
  .post-card {
    margin-bottom: 20px;
  }
  .interactive-item {
    margin-right: 10px;
  }
  .action-icon {
    margin-right: 5px;
  }
  .share-icon {
    right: 0;
    bottom: 0;
    width: 20px;
    height: 20px;
    background-color: white;
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

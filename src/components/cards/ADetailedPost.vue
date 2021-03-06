<template>
  <v-card
    class="mx-auto post-wrapper"
    flat
    outlined
    max-width="750"
  >
    <v-container fluid>
      <v-row>
        <v-col 
          cols="12" 
          md="1" 
          class="text-center pl-0 fill-height content-card upvote-bar d-none d-md-block"
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
            <v-col>
              <v-btn icon>
                <v-icon>mdi-arrow-down-bold</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>

        <v-col
          cols="12"
          md="11"
          class="content-card"
        >
          <v-row
            class="flex-column ma-1 fill-height"
          >
            <v-card-subtitle class="pb-0 content-card info-row"><v-icon v-text="getSubredditIcon(post.subredditName)"></v-icon> m/{{ capitalizeFirst(post.subredditName) }} • Posted by u/{{ post.author }} • {{ post.dateRange }}</v-card-subtitle>

            <v-card-title v-if="show" class="heading text--primary">
              <p>{{ post.title }}</p>
            </v-card-title>

            <v-card-text v-if="show" class="text--primary">
              <p>{{ post.body }}</p>
            </v-card-text>

            <v-card v-else flat class="mx-auto">

              <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline wrap-text-title mb-1">{{ post.title }}</v-list-item-title>
                  <v-list-item-subtitle class="wrap-text">{{ post.body }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  class="ma-3 hidden-sm-and-down"
                  size="100"
                  tile
                >
                  <v-img :src="getImageUrl.icon" :alt="post.author + ' logo'"></v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>

            <v-card-text v-if="podcasts" class="text--primary">
              <div 
                id="buzzsprout-large-player-842749"
              >
              </div>
            </v-card-text>

            <v-img
              v-if="show && !podcasts"
              class="white--text"
              height="300px"
              contain
              :src="getImageUrl.icon"
              :alt="post.author + ' logo'"
            >
            </v-img>
            <thepostactions :post="post" :isDetailed="true" :numOfComments="comments.length"  />
          </v-row>
        </v-col>
      </v-row>
      <acommentform v-if="showCommentForm"/>
      <v-row v-for="comment in comments" :key="comment._id">
        <acomment :comment="comment" :isSubComment="false" />
        <v-row v-for="subComment in getSubCommentArray(comment._id)" :key="subComment._id" v-bind:subComment="subComment">
          <acomment :comment="subComment" :isSubComment="true" />
        </v-row>
      </v-row>
    </v-container>
  </v-card>   
</template>

<script>
  import axios from 'axios';
  import ThePostActions from '@/components/cards/ThePostActions.vue'
  import ACommentForm from '@/components/forms/ACommentForm.vue'
  import AComment from '@/components/cards/AComment.vue'

  const url = process.env.VUE_APP_API_URL

  export default {
    name: "ADetailedPost",
    components: {
      'thepostactions': ThePostActions,
      'acomment': AComment,
      'acommentform': ACommentForm,
    },
    data: function() {
      return {
        post: {
          img: 'placeholder.png'
        },
        show: false,
        podcasts: false,
        showCommentForm: false,
        comments: [],
        subcomments: []
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
    mounted: function() {
      this.injectScript('https://www.buzzsprout.com/842749.js?container_id=buzzsprout-large-player-842749&player=large');
    },
    created: function() {
      this.getPostDetails(this.$route.params.id);
      this.getPostComments(this.$route.params.id);
      // Fetch all of the available sub-comments, probably horrendously slow
      this.getSubComments();
    },
    methods: {
      injectScript: (scriptName) => {
        let newScript = document.createElement('script');
        newScript.setAttribute('src', scriptName)
        newScript.async = true;
        document.head.appendChild(newScript);
      },
      getPostDetails: function(postId) {
        axios.get(`${url}api/v1/post/${postId}`)
          .then((res) => {
            this.post = res.data;
            if (this.post.subredditName !== 'jobs') this.show = true;
            if (this.post.subredditName === 'jobs') this.showCommentForm = true;
            if (this.post.title === 'Teching Out Podcast') this.podcasts = true;
          })
          .catch((err) => {
            console.log(err);
          })
      },
      getPostComments: function(postId) {
        axios.get(`${url}api/v1/comment/${postId}`)
          .then((res) => {
            this.comments = res.data;
          })
          .catch((err) => {
            console.log(err);
          })
      },
      getSubComments: function() {
        axios.get(`${url}api/v1/subcomment`)
          .then((res) => {
            this.subcomments = res.data;
            return res;
          })
          .catch((err) => {
            console.log(err);
          })
      },
      getSubCommentArray: function(commentId) {
        return this.subcomments.filter((subcomment) => subcomment.commentId === commentId);
      },
      capitalizeFirst(name) {
        if (name) return name.charAt(0).toUpperCase() + name.slice(1);
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
      },
    }
  };
</script>

<style scoped>
  .container {
    margin-top: 60px;
  }
  .post-wrapper {
    width: 100%;
  }
  .title-header {
    font-size: 20px;
    margin-top: 15px;
  }
  .info-row {
    padding-top: 0px;
  }
  .wrap-text-title {
    white-space: normal;
  }
  .wrap-text {
    -webkit-line-clamp: unset !important;
  }
</style>

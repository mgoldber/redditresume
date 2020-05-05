<template>
  <v-card
    class="mx-auto post-wrapper"
    flat
    outlined
    max-width="750"
  >
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="1" class="text-center pl-0 fill-height content-card upvote-bar">
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
            <v-card-subtitle class="pb-0 content-card info-row"><v-icon>mdi-reddit</v-icon> r/{{ post.subredditName }} • Posted by u/{{ post.author }} • {{ post.dateRange }}</v-card-subtitle>

            <v-card-text v-if="show" class="text--primary heading">
              <div>{{ post.title }}</div>
            </v-card-text>

            <div v-else class="d-flex flex-no-wrap justify-space-between">
              <v-card-text class="title-header text--primary">
                <div>{{ post.title }}</div>
              </v-card-text>

              <v-avatar
                class="ma-3"
                size="130"
                tile
              >
                <v-img :src="getImageUrl(post.img)"></v-img>
              </v-avatar>
            </div>

            <v-card-text class="text--primary">
              <div>{{ post.body }}</div>
              <div 
                id="buzzsprout-player-2621371"
                v-if="podcasts"
              >
              </div>
            </v-card-text>

            <v-img
              v-if="show && !podcasts"
              class="white--text"
              height="300px"
              contain
              :src="getImageUrl(post.img)"
            >
            </v-img>
          </v-row>
        </v-col>
      </v-row>
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
  import AComment from '@/components/cards/AComment.vue'

  export default {
    name: "ADetailedPost",
    components: {
      'acomment': AComment
    },
    data: function() {
      return {
        post: {},
        show: false,
        podcasts: false,
        comments: [],
        subcomments: []
      }
    },
    mounted: function() {
      let buzzsproutScript = document.createElement('script');
      buzzsproutScript.setAttribute('src', 'https://www.buzzsprout.com/842749/2621371-open-office-spaces.js?container_id=buzzsprout-player-2621371&player=small" type="text/javascript" charset="utf-8')
      buzzsproutScript.async = true;
      document.head.appendChild(buzzsproutScript);
    },
    created: function() {
      this.getPostDetails(this.$route.params.id);
      this.getPostComments(this.$route.params.id);
      // Fetch all of the available sub-comments, probably horrendously slow
      this.getSubComments();
    },
    methods: {
      getImageUrl: (pic) => {
        return require('@/assets/' + pic);
      },
      getPostDetails: function(postId) {
        axios.get(`http://localhost:8080/api/v1/post/${postId}`)
          .then((res) => {
            this.post = res.data;
            if (this.post.subredditName !== 'jobs') this.show = true;
            if (this.post.subredditName === 'podcasts') this.podcasts = true;
          })
          .catch((err) => {
            console.log(err);
          })
      },
      getPostComments: function(postId) {
        axios.get(`http://localhost:8080/api/v1/comment/${postId}`)
          .then((res) => {
            this.comments = res.data;
          })
          .catch((err) => {
            console.log(err);
          })
      },
      getSubComments: function() {
        axios.get(`http://localhost:8080/api/v1/subcomment`)
          .then((res) => {
            this.subcomments = res.data;
            console.log(this.subcomments);
            return res;
          })
          .catch((err) => {
            console.log(err);
          })
      },
      getSubCommentArray: function(commentId) {
        return this.subcomments.filter((subcomment) => subcomment.commentId === commentId);
      }
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
</style>

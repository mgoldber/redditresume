<template>
  <v-card
    class="mx-auto"
    flat
    outlined
    max-width="950"
  >
    <v-container fluid>
      <v-row justify="space-between">
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
            <v-card-subtitle class="pb-0 content-card"><v-icon>mdi-reddit</v-icon> r/Jobs • Posted by u/{{ post.author }} • {{ post.dateRange }}</v-card-subtitle>

            <v-card-text class="display-1 text--primary">
              <div>{{ post.title }}</div>
            </v-card-text>

            <v-card-text class="text--primary">
              <div>{{ post.body }}</div>
            </v-card-text>
          </v-row>
        </v-col>
      </v-row>
       <div v-for="comment in comments" :key="comment._id">
      <div class="comment-wrap">
        <div class="comment-block">
          <p class="comment-text">{{ comment.body }}</p>
          <div class="bottom-comment">
            <div class="comment-author">{{ comment.author }}</div>
          </div>
        </div>
      </div>
    </div>
    </v-container>
  </v-card>   
</template>

<script>
  import axios from 'axios';
  export default {
    name: "ADetailedPost",
    data: function() {
      return {
        post: {},
        comments: []
      }
    },
    created: function() {
      axios.get(`http://localhost:8080/api/v1/post/${this.$route.params.id}`)
        .then((res) => {
          this.post = res.data;
          axios.get(`http://localhost:8080/api/v1/comment/${this.$route.params.id}`)
            .then((res) => {
              this.comments = res.data;
            })
            .catch((err) => {
              console.log(err);
            })
        })
        .catch((err) => {
          console.log(err);
        })
    }
  };
</script>

<style scoped>
  .container {
    margin-top: 100px;
  }
  .comment-wrap {
    margin-bottom: 1.25rem;
    display: table;
    width: 100%;
    min-height: 5.3125rem;
  }

  .photo {
    padding-top: 0.625rem;
    display: table-cell;
    width: 3.5rem;
  }

  .photo .avatar {
    height: 2.25rem;
    width: 2.25rem;
    border-radius: 50%;
    background-size: contain;
  }

  .comment-block {
    padding: 1rem;
    background-color: #fff;
    display: table-cell;
    vertical-align: top;
    border-radius: 0.1875rem;
    -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.08);
            box-shadow: 0 1px 3px 0 rgba(0,0,0,0.08);
  }

  .comment-block textarea {
    width: 100%;
    resize: none;
  }

  .comment-text {
    margin-bottom: 1.25rem;
  }

  .bottom-comment {
    color: #acb4c2;
    font-size: 0.875rem;
  }

  .comment-date {
    float: left;
  }

  .comment-actions li {
    display: inline;
    margin: -2px;
    cursor: pointer;
  }

  .comment-actions li.complain {
    padding-right: 0.75rem;
    border-right: 1px solid #e1e5eb;
  }

  .comment-actions li.reply {
    padding-left: 0.75rem;
    padding-right: 0.125rem;
  }

  .comment-actions li:hover {
    color: #0095ff;
  }
</style>

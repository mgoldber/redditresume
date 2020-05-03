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
      <v-row v-for="comment in comments" :key="comment._id">
        <v-row justify="space-between comment-row">
          <v-col cols="12" md="1" class="text-center pl-0 fill-height">
            <v-row
              class="flex-column ma-0"
              no-gutters
            >
              <v-col class="px-0">
                <v-btn icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            md="11"
          >
            <v-row
              class="flex-column ma-1 fill-height"
            >
              <v-card-text class="text--primary comment-writer">
                {{ comment.author }}
              </v-card-text>
              <v-card-text class="text--primary">
                {{ comment.body }}
              </v-card-text>

              <v-card-actions>
                <v-row
                  class="actions-row"
                  align="center"
                >
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-arrow-up-bold</v-icon></span>
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-arrow-down-bold</v-icon></span>
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-comment</v-icon>Reply</span>
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-seal</v-icon>Give award</span>
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-share</v-icon>Share</span>
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-bookmark-plus</v-icon>Save</span>
                </v-row>
              </v-card-actions>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
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
    margin-top: 60px;
  }
  .comment-writer {
    padding: 0;
  }
  .comment-row {
    margin-left: 20px;
  }
</style>

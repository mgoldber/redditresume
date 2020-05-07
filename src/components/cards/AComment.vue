<template>
  <v-row class='comment' v-bind:class="{'comment-row': isSubComment}">
    <v-col cols="12" md="1" sm="1" xs="1" class="text-center pl-0 fill-height d-none d-md-block">
      <v-row
        class="flex=column ma-0"
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
      sm="11"
      xs="11"
    >
      <v-row
        class="flex-column ma-1 fill-height"
      >
        <v-card-text class="comment-writer">
          {{ comment.author }} <v-icon color="blue" v-bind:class="{'is-visible': !isSubComment}">mdi-pencil</v-icon>
        </v-card-text>
        <v-card-text class="text--primary comment-body">
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
</template>

<script>
  export default {
    name: 'AComment',
    props: ['comment', 'isSubComment']
  }
</script>

<style scoped>
  .comment {
    margin-left: 5px;
  }
  .comment-writer {
    padding: 0;
    color: rgba(0,0,0,0.6);
  }
  .is-visible {
    display: none;
  }
  .comment-body {
    padding-left: 0;
  }
  .comment-row {
    margin-left: 45px;
  }
  .action-icon {
    margin-right: 5px;
  }
  .interactive-item {
    margin-right: 10px;
    font-size: 12px;
  }
</style>
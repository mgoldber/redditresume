<template>
  <v-card-actions>
    <v-row
      :class="{'pl-3': $vuetify.breakpoint.smAndDown}"
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
</template>

<script>
  export default {
    name: 'ThePostActions',
    props: ["post"]
  }
</script>

<style scoped>
  .action-icon {
    margin-right: 5px;
  }
  .interactive-item {
    margin-right: 10px;
  }
</style>
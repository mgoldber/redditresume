<template>
    <v-card
      class="mx-auto post-card"
      flat
      outlined
      max-width="750"
      link
      hover
      :to="{ path: '/story/' + story.data.id }"
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
                  <span>{{ story.data.score }}</span>
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
            class="content-card"
          >
            <v-row
              class="flex-column ma-1 fill-height"
            >
              <v-card-subtitle class="pb-0 content-card"><v-icon>mdi-reddit</v-icon> r/Jobs • Posted by u/USERNAME 14 hours ago</v-card-subtitle>

              <v-card-text class="text--primary">
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas, ex commodo congue dapibus, ligula augue finibus purus, a tristique enim lacus et justo. Nam lobortis eros eget dui vehicula suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed luctus magna in nibh congue placerat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum lobortis vitae nulla nec pretium. Mauris malesuada mattis nibh a.</div>
              </v-card-text>

              <v-img
                class="white--text align-end"
                height="400px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
              </v-img>

              <v-card-actions>
                <v-row
                  class="actions-row"
                  align="center"
                >
                  <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-comment</v-icon>{{ story.data.score }} comments</span>
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
    name: 'Item',
    props: ["story"]
  };
</script>

<style scoped>
  .actions-row {
    margin-left: 10px;
  }
  .post-card {
    margin-bottom: 20px;
  }
  .interactive-item {
    margin-right: 10px;
  }
  .action-icon {
    margin-right: 5px;
  }
  .content-card {
    padding-top: 0;
  }
  .upvote-bar {
    background-color: '#ffffff';
  }
</style>

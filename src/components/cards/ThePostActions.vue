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
      <v-btn
        depressed
        color="transparent"
        v-if="isDetailed"
        @click.stop="award"
      >
        <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-seal</v-icon>Give award</span>
      </v-btn>
      <span v-else class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-seal</v-icon>Give award</span>
      <adialogbox ref="linkedinDialog" :dialogData="{
        title: 'Wow an award!',
        body: 'The only award I need is your friendship...',
        rejectText: 'Don\'t connect',
        confirmText: 'Connect on LinkedIn',
        sendFunc: (url) => {
          submit('https://www.linkedin.com/in/markdgoldberg/')
        }
      }" />
      <v-btn
        depressed
        color="transparent"
        v-if="isDetailed"
        @click.stop="share"
      >
        <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-share</v-icon>Share</span>
      </v-btn>
      <span v-else class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-share</v-icon>Share</span>
      <adialogbox ref="twitterDialog" :dialogData="{
        title: 'Wow a share!',
        body: 'Sounds like you want to be Twitter friends...',
        rejectText: 'Don\'t follow',
        confirmText: 'Connect on Twitter',
        sendFunc: (url) => {
          submit('https://twitter.com/mgoldber')
        }
      }" />
      <v-btn
        depressed
        color="transparent"
        v-if="isDetailed"
        @click.stop="save"
      >
        <span class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-bookmark-plus</v-icon>Save</span>
      </v-btn>
      <span v-else class="subheading mr-2 interactive-item"><v-icon class="action-icon">mdi-bookmark-plus</v-icon>Save</span>
      <adialogbox ref="githubDialog" :dialogData="{
        title: 'Saving for later?',
        body: 'Sounds like version control. Connect on GitHub?',
        rejectText: 'No way!',
        confirmText: 'Connect on GitHub',
        sendFunc: (url) => {
          submit('https://github.com/mgoldber')
        }
      }" />
    </v-row>
    </v-card-actions>
</template>

<script>
  import ADialogBox from '@/components/dialogs/ADialogBox.vue'

  export default {
    name: 'ThePostActions',
    components: {
      'adialogbox': ADialogBox
    },
    props: ["post", "isDetailed"],
    data: function() {
      return {
        dialog: false
      }
    },
    methods: {
      award() {
        this.$refs.linkedinDialog.setValue(true);
      },
      share() {
        this.$refs.twitterDialog.setValue(true);
      },
      save() {
        this.$refs.githubDialog.setValue(true);
      },
      submit(url) {
        window.open(url, "_blank")
        this.$refs.dialogComp.setValue(false);
      }
    }
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
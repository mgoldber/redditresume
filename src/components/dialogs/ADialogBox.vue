<template>
  <v-dialog
    v-model="dialog"
    max-width="350"
  >
    <v-card>
      <v-spacer></v-spacer>
      <v-card-title class="headline">{{ dialogData.title }}</v-card-title>
      <v-card-text>{{ dialogData.body }}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="red darken-1"
          text
          @click="dialog = false"
        >
          {{ dialogData.rejectText }}
        </v-btn>
        <v-btn
          color="green darken-1"
          text
          @click="dialogData.sendFunc"
        >
          {{ dialogData.confirmText }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'ADialogBox',
    props: ["dialogData"],
    data: function() {
      return {
        dialog: false
      }
    },
    methods: {
      setValue: function(value) {
        this.dialog = value;
      }
    }
  }
</script>


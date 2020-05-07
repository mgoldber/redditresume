<template>
  <v-form
    ref="form"
    class="form-container"
  > 
    <v-card
      flat
    >
      <v-row>
        <v-col
          cols="12"
          md="3"
        >
          <p>Comment as:</p>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="name"
            class="comment-name"
            placeholder="MarkG (pls use real name)"
            :disabled="disabled"
            required
          >
          </v-text-field>
        </v-col>
      </v-row>
      <v-textarea
        v-model="comment"
        class="comment-area"
        :auto-grow="autoGrow"
        :clearable="clearable"
        :counter="counter ? counter : false"
        :filled="filled"
        :flat="flat"
        :disabled="disabled"
        :hint="hint"
        :label="label"
        :loading="loading"
        :no-resize="noResize"
        :outlined="outlined"
        :persistent-hint="persistentHint"
        :placeholder="placeholder"
        :rounded="rounded"
        :row-height="rowHeight"
        :rows="rows"
        :shaped="shaped"
        :single-line="singleLine"
        :solo="solo"
      >
      </v-textarea>
      <v-card-actions>
        <v-row>
          <v-spacer />
          <v-btn 
            color="primary"
            :disabled="disabled"
            class="mr-4 submit-btn" 
            @click.stop="dialog = true"
          >Comment
          </v-btn>
        </v-row>
      </v-card-actions>
      <v-dialog
        v-model="dialog"
        max-width="290"
      >
        <v-card>
          <v-spacer></v-spacer>
          <v-card-title class="headline">Support Mark?</v-card-title>
          <v-card-text>Are you sure you want to show your undying support for your best friend Mark?</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
            >
              No, hate him
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="submit"
            >
              Yes, love him
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-form>
</template>

<script>
  export default {
    name: 'ACommentForm',
    data: function() {
      return {
        name: '',
        autoGrow: false,
        autofocus: true,
        clearable: false,
        dialog: false,
        counter: 0,
        filled: false,
        flat: false,
        disabled: this.isDisabled(),
        hint: '',
        label: '',
        loading: false,
        comment: '',
        noResize: true,
        outlined: false,
        persistentHint: false,
        placeholder: 'Mark is the best coworker I\'ve ever had. \n\nThis form will send an email to Mark before actually showing up on the site.',
        rounded: false,
        rowHeight: 24,
        rows: 5,
        shaped: false,
        singleLine: false,
        solo: false,
      }
    },
    mounted: function() {
      
    },
    methods: {
      submit() {
        this.$store.dispatch('send_comment_form', { name: this.name, comment: this.comment });
        this.dialog = false;
      },
      isDisabled() {
        return this.$store.state.comments.length > 0 ? true : false
      }
    }
  }
</script>

<style scoped>
  .form-container {
    max-width: 600px;
    padding: 10px;
    margin: auto;
    margin-bottom: 20px;
  }
  .comment-area {
    border: 1px solid #d0d0d0;
    border-radius: 5px;
  }
  .comment-name {
    padding: 0;
    margin: 0;
  }
  .submit-btn {
    margin-right: 100px;
  }
</style>
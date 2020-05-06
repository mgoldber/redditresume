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
            placeholder="MarkG"
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
            class="mr-4 submit-btn" @click="submit"
          >Comment
          </v-btn>
        </v-row>
      </v-card-actions>
      
    </v-card>
  </v-form>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'ACommentForm',
    data: function() {
      return {
        name: '',
        autoGrow: false,
        autofocus: true,
        clearable: false,
        counter: 0,
        filled: false,
        flat: false,
        hint: '',
        label: '',
        loading: false,
        comment: 'Mark is the best coworker I\'ve ever had.',
        noResize: true,
        outlined: false,
        persistentHint: false,
        placeholder: '',
        rounded: false,
        rowHeight: 24,
        rows: 5,
        shaped: false,
        singleLine: false,
        solo: false,
      }
    },
    methods: {
      submit() {
        console.log(this.name);
        console.log(this.comment);
        console.log('btn submit')
        axios.post('http://localhost:8080/api/v1/contact');
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
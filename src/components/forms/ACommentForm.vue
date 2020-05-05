<template>
  <v-form
    ref="form"
    class="form-container"
  >
    <v-text-field
      v-model="name"
      label="Name"
      placeholder="MarkG"
      required
    >
    </v-text-field>

    <v-textarea
      v-model="model"
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
    ></v-textarea>
    <v-btn 
      class="mr-4" @click="submit"
    >Comment
    </v-btn>
  </v-form>
</template>

<script>
  export default {
    name: 'ACommentForm',
    data: function() {
      return {
        autoGrow: false,
        autofocus: true,
        clearable: false,
        counter: 0,
        filled: false,
        flat: false,
        hint: '',
        label: '',
        loading: false,
        model: 'Mark is the best coworker I\'ve ever had.',
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
        this.$v.$touch()
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
</style>
<template>
  <v-list-item :to="to">
    <v-list-item-action>
      <v-icon>{{ icon }}</v-icon>
    </v-list-item-action>
    <v-list-item-content>
      {{ text }}
    </v-list-item-content>
  </v-list-item>
</template>

<script>
  export default {
    name: 'AMenuItem',
    props: {
      to: {
        type: String,
        default: '',
        required: true,
      },
      icon: {
        type: String,
        default: '',
      },
      text: {
        type: String,
        default: '',
        required: true,
      }
    }
  }
</script>

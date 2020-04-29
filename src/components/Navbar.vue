<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <span>Logo</span>
    <v-text-field
      solo-inverted
      flat
      hide-details
      label="Search"
    />

    <v-spacer />
    <v-menu
      v-model="value"
      :disabled="disabled"
      :absolute="absolute"
      :open-on-hover="openOnHover"
      :close-on-click="closeOnClick"
      :close-on-content-click="closeOnContentClick"
      :offset-x="offsetX"
      :offset-y="offsetY"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          Username
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    items: [
      { title: 'My Profile' },
      { title: 'User Settings' },
      { title: 'Night Mode' },
      { title: 'Reddit Coins' },
    ],
    disabled: false,
    absolute: false,
    openOnHover: false,
    value: false,
    closeOnClick: true,
    closeOnContentClick: true,
    offsetX: false,
    offsetY: true,
  })
}
</script>

<style scoped>
  .pure-menu {
    background-color: #ffffff;
  }
  .pure-menu a {
    color: 000000;
  }
</style>

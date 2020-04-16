<template>
  <v-app-bar app class="header-color" dark>
    <v-app-bar-nav-icon
      v-if="showNavLink"
      class="hidden-md-and-up"
      @click.stop="drawer = !drawer"
    ></v-app-bar-nav-icon>
    <v-toolbar-title color="brown lighten-4">
      {{ headerMainTitle }}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-item-group v-if="showNavLink" class="hidden-sm-and-down">
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        rounded
        :to="link.url"
      >
        {{ link.label }}
      </v-btn>
    </v-item-group>
    <v-navigation-drawer
      dark
      color="brown"
      v-model="drawer"
      absolute
      temporary
      height="100vh"
    >
      <v-list dense>
        <v-list-item
          v-for="link in links"
          :key="`${link.label}-header-link`"
          :to="link.url"
        >
          <v-list-item-title>{{ link.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script>
export default {
  name: "app-header",
  components: {},
  props: {
    showNavLink: {
      type: Boolean,
      default: true
    },
    headerMainTitle: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      drawer: false
    };
  }
};
</script>

<style scoped>
.v-application a {
  color: white;
  text-transform: uppercase;
  font-size: 0.875rem;
  text-decoration: none;
  font-weight: 300;
}
.v-navigation-drawer {
  top: 50px;
}
.header-color {
  background-color: #444a5a !important;
  border-color: #444a5a !important;
}
</style>

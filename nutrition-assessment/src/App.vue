<template>
  <v-app>
    <app-header
      :showNavLink="showNavLink"
      :footerDescription="footerDescription"
      :links="navLinkUrl"
      :defaultPageUrl="defaultPageUrl"
      :headerMainTitle="headerMainTitle"
    />
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer v-bind:footerDescription="footerDescription" />
  </v-app>
</template>

<script>
import { AppHeader, AppFooter } from "@/components";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      showNavLink: true,
      footerDescription: "Nutrition Reports",
      headerMainTitle: "Nutrition Reports",
      navLinkUrl: [
        {
          label: "Home",
          url: "/"
        }
      ],
      defaultPageUrl: "/"
    };
  }
};
</script>
<style>
.v-content__wrap {
  background-image: url(https://developer.edamam.com/images/bgr-w.jpg);
  background-position: top center;
  background-repeat: no-repeat;
  height: 100% !important;
  background-size: auto 100%;
  background-position: left top;
}
</style>

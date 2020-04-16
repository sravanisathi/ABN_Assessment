<template>
  <v-footer class="footer-color " color="lighten-4" padless>
    <v-layout justify-center wrap>
      <v-flex py-4 text-center white--text xs12>
        <strong>{{ footerDescription }}</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>
<script>
export default {
  name: "app-footer",
  components: {},
  props: {
    footerDescription: {
      type: String
    }
  }
};
</script>
<style scoped>
.footer-color {
  background-color: #444a5a !important;
  border-color: #444a5a !important;
}
.text-center {
  padding: 0px;
}
div {
  color: inherit;
}
</style>

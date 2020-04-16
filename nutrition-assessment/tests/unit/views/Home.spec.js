import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
describe("In home Component", () => {
  let apphomeWrapper;
  beforeEach(() => {
 Vue.use(Vuetify);
    Vue.use(VueRouter);
    apphomeWrapper = shallowMount(Home, {
      Vue,
     
    });
  });

  afterEach(() => {
    //apphomeWrapper.destroy();
  });

  it("is a Vue instance", () => {
   //expect(apphomeWrapper);
  });
});

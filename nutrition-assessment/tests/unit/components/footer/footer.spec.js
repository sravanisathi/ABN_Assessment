import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import AppFooter from "../../../../src/components/footer/footer.vue";

describe("In footer Component", () => {
  let appFooterWrapper;
  beforeEach(() => {
    Vue.use(Vuetify);
    appFooterWrapper = shallowMount(AppFooter, {
      Vue
    });
  });

  afterEach(() => {
    appFooterWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appFooterWrapper.isVueInstance).toBeTruthy();
  });
  it("it shoud have <v-footer> element", () => {
    expect(appFooterWrapper.contains("v-footer-stub")).toBe(true);
  });
  it("it shoud have <v-flex> element", () => {
    expect(appFooterWrapper.contains("v-flex-stub")).toBe(true);
  });
  it("it should have a <v-layout> element", () => {
    expect(appFooterWrapper.contains("v-layout-stub")).toBe(true);
  });
  
 
});

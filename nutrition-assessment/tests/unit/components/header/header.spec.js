import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Vuetify from "vuetify";
import header from "../../../../src/components/header/header.vue";

describe("In header component, ", () => {
  let headerWrapper;
  let headerMainTitle = "test";

  beforeEach(() => {
    Vue.use(Vuetify);
    headerWrapper = shallowMount(header, {
      Vue,
      propsData: { headerMainTitle }
    });
    // eslint-disable-next-line no-undef
  });

  afterEach(() => {
    headerWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(headerWrapper.isVueInstance).toBeTruthy();
  });
});

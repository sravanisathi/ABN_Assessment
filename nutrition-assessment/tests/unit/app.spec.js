import { shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import App from "@/app.vue";
import Vuetify from "vuetify";
import Vue from "vue";
import AppHeader from "@/components/header/header.vue";
import AppFooter from "@/components/footer/footer.vue";
describe("In App Component", () => {
  let appWrapper;
  const router = new VueRouter({
    path: "/",
    name: "Home"
  });

  beforeEach(() => {
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    const headerMainTitle = "Nutrition Reports";
    // const navLinkUrl = [
    //   {
    //     label: "Dashboard",
    //     url: "/"
    //   },
    //   {
    //     label: "Categories",
    //     url: "/categories"
    //   }
    // ];
    const defaultPageUrl = "/";
    // const showNavLink = true;
    appWrapper = shallowMount(App, {
      Vue,
      router,
      propsData: {
        // showNavLink: showNavLink,
        headerMainTitle: headerMainTitle,
        // links: navLinkUrl,
        defaultPageUrl: defaultPageUrl
      }
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(appWrapper.isVueInstance).toBeTruthy();
  });
  it("it should have a <v-app> element", () => {
    expect(appWrapper.contains("v-app-stub")).toBe(true);
  });
  it("it should have a <v-content> element", () => {
    expect(appWrapper.contains("v-content-stub")).toBe(true);
  });
  it("it should have a <router-view> element", () => {
    expect(appWrapper.contains("router-view-stub")).toBe(true);
  });
  it("it should load the app-header", () => {
    expect(AppHeader).toBeTruthy();
  });
  it("it should load the app-footer", () => {
    expect(AppFooter).toBeTruthy();
  });
  it("check props", () => {
    expect(appWrapper.vm.headerMainTitle).toBe("Nutrition Reports");
  });
  it("default page url", () => {
    expect(appWrapper.vm.defaultPageUrl).toBe("/");
  });
});

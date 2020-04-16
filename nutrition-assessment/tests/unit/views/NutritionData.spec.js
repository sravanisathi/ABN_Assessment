import { shallowMount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Vue from "vue";
import NutritionData from '@/views/NutritionData';
jest.mock("@/views/NutritionData");
describe("In NutritionData Component", () => {
  let nutritionWrapper;
  

  beforeEach(() => {
    Vue.use(Vuetify);
  
    nutritionWrapper = shallowMount(NutritionData, {
      Vue,
    });
  });

  afterEach(() => {
    nutritionWrapper.destroy();
  });

  // it("is a Vue instance", () => {
  //   expect(nutritionWrapper.isVueInstance).toBeTruthy();
  // });
//   it("it should have a <v-app> element", () => {
//     expect(appWrapper.contains("v-app-stub")).toBe(true);
//   });
//   it("it should have a <v-content> element", () => {
//     expect(appWrapper.contains("v-content-stub")).toBe(true);
//   });
//   it("it should have a <router-view> element", () => {
//     expect(appWrapper.contains("router-view-stub")).toBe(true);
//   });
//   it("it should load the app-header", () => {
//     expect(AppHeader).toBeTruthy();
//   });
//   it("it should load the app-footer", () => {
//     expect(AppFooter).toBeTruthy();
//   });
//   it("check props", () => {
//     expect(appWrapper.vm.headerMainTitle).toBe("Nutrition Reports");
//   });
//   it("default page url", () => {
//     expect(appWrapper.vm.defaultPageUrl).toBe("/");
//   });
});

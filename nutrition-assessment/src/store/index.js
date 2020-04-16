import Vue from "vue";
import Vuex from "vuex";
import { getIngredients } from "../services/common/nutrition-data/nutrition-data";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    nutritionData: []
  },
  mutations: {
    getNutritionDataActionMutation(state, nutritionData) {
      state.nutritionData = nutritionData;
    }
  },
  actions: {
    //[SS]: Getting NutritionData
    async getNutritionDataAction({ commit }, foodItems) {
      await getIngredients(foodItems)
        .then(success => {
          commit("getNutritionDataActionMutation", success);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    getnutritionDataList(state) {
      return state.nutritionData;
    }
  },

  modules: {}
});

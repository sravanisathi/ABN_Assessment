import Vuex from 'vuex'; 
 import { createLocalVue } from '@vue/test-utils'; 
 //import * as mealsModule from '../../../../../src/store/modules/mealsModule'; 
 import { getIngredients } from '@/services/common/nutrition-data/nutrition-data'; 

 
 // Mock module with Jest mock functions 
 
jest.mock("@/services/common/nutrition-data/nutrition-data")

  // create local vue instance 
 const localVue = createLocalVue(); 
 localVue.use(Vuex); 
 describe('In store', () => { 
    const store = new Vuex.Store({ 
        modules: {}, 
        state: {
           nutritionData:[]
         },
         mutations: {
            getNutritionDataActionMutation(state, nutritionData) {
                state.nutritionData = nutritionData;
              }
         },
         actions: {
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
       }); 
   

    let commit; 
    let dispatch; 
    let error; 
    
     
     beforeEach(() => { 
     commit = jest.fn(); 
      dispatch = jest.fn(); 
     
      }); 
    


      it('Nutrition data getcall', async () => { 
            const ingredientsData ={"ingr":["1 cup rice,","10 oz chickpeas"]}
            // Control mock to resolve with an array of objects 
            getIngredients.mockResolvedValue(ingredientsData); 
           await store.actions.getNutritionDataAction({ commit, dispatch }); 
           expect(commit).toHaveBeenCalledWith('Ingritents', ingredientsData); 
         }); 
         it('Nutrition data getcall cacth en error', async () => { 
            getIngredients.mockRejectedValue(error); 
               await store.actions.getNutritionDataAction({ commit, dispatch }); 
               expect(result).toEqual(error); 
             }); 

             it('SET_Nutrition sets state.nutritionData to nutritiondetails', () => { 
                const nutritiondetails = {"ingredients":[{ Name: 'Chicken Biryani' }, { Name: 'Dal Fry' }]}; 
                    store.mutations.getNutritionDataActionMutation(store.state, nutritiondetails); 
                     expect(state.nutritionData).toBe(nutritiondetails); 
                  }); 
                //   it('Get_Nutrition data  state.nutritionData to nutritiondetails', () => { 
                //       const state={
                //         nutritionData:[],
                //       }
                //     const nutritiondetails = {"ingredients":[{ Name: 'Chicken Biryani' }, { Name: 'Dal Fry' }]};  
                //         store.getters.getnutritionDataList(state); 
                //          expect(state.nutritionData).toBe(nutritiondetails); 
                //       });
                 
                
 
 }); 

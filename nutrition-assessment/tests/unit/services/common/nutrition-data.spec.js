import { getIngredients } from "@/services/common/nutrition-data/nutrition-data.js";
import httpClient from "@/services/common/http-client/http-client";

// Mock module with Jest mock functions
jest.mock("@/services/common/http-client/http-client");
jest.mock("@/services/common/nutrition-data/nutrition-data")
describe("In nutrition data service, ", () => {
  
  it("getIngredients api should call and it should resolve promise data", () => {
    const ingredientsData ={"ingr":["1 cup rice,","10 oz chickpeas"]}
    httpClient.post.mockResolvedValue(ingredientsData);
    getIngredients(result => {
      expect(result).toEqual(ingredientsData);
    })
  });

  it("getIngredients api should call and it should reject promise data", () => {
    const error = new Error({ message: "Async error" });
    httpClient.post.mockRejectedValue(error);
    getIngredients(result => {
      expect(result).toEqual(error);
    });
  });
});


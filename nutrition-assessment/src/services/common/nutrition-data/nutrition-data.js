import httpClient from "@/services/common/http-client/http-client.js";
const url = "nutrition-details";

export const getIngredients = foodItems => {
  return httpClient
    .post(
      `${url}?app_id=47379841&app_key=d28718060b8adfd39783ead254df7f92`,
      foodItems
    )
    .then(res => res.data);
};

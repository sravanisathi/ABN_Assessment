<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <v-card>
          <v-card-title>
            Nutrition details for your Food Item
            <v-spacer></v-spacer>
          </v-card-title>
          <v-data-table
            :headers="headersData"
            :items="ingredientsData"
          ></v-data-table>
        </v-card>
      </v-col>
      <v-container class="grey lighten-5 text-center">
        <v-list-item-title class="nutrition-facts"
          >Nutrition Facts (Amount Per Serving )</v-list-item-title
        >
        <v-row no-gutters style="flex-wrap: nowrap;" class="label-color">
          <v-col cols="4">
            <v-list-item-title>Label</v-list-item-title>
          </v-col>
          <v-col cols="4">
            <v-list-item-title>Quantity</v-list-item-title>
          </v-col>
          <v-col cols="4">
            <v-list-item-title>Units</v-list-item-title>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          v-for="(dailyVal, index) in dailyValues"
          :key="index"
          style="flex-wrap: nowrap;"
        >
          <v-col cols="4">
            <v-list-item-subtitle>{{
              nutritionData.totalDaily[dailyVal].label
            }}</v-list-item-subtitle>
          </v-col>
          <v-col cols="4">
            <v-list-item-subtitle>{{
              nutritionData.totalDaily[dailyVal].quantity
            }}</v-list-item-subtitle>
          </v-col>
          <v-col cols="4">
            <v-list-item-subtitle>{{
              nutritionData.totalDaily[dailyVal].unit
            }}</v-list-item-subtitle>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "NutritionData",
  data: () => ({
    search: "",
    nutritionData: [],
    ingredientsData: [],
    headersData: [],
    dailyValues: []
  }),
  mounted() {
    //checking for availablity of store data for nutrition details,
    // if store details are not available it should navigate to home page
    let storedata = this.$store.getters.getnutritionDataList;
    if (storedata.length == 0) {
      this.$router.push("/");
    } else {
      this.nutritionData = this.$store.getters.getnutritionDataList;
      this.dailyValues = Object.keys(this.nutritionData.totalDaily);
      this.ingredientsData = this.nutritionData.ingredients.map(data => {
        return data.parsed[0];
      });
      if (this.headersData.length == 0) {
        var test = Object.keys(this.nutritionData.ingredients[0].parsed[0])
          .map(val => {
            return { text: val, value: val };
          })
          .filter(val => {
            return (
              val.value !== "foodMatch" &&
              val.value !== "foodId" &&
              val.value != "retainedWeight" &&
              val.value != "nutrients" &&
              val.value != "measureURI" &&
              val.value != "status"
            );
          });

        this.headersData = test;
      }
    }
  }
};
</script>
<style>
.nutrition-facts {
  background-color: aquamarine;
  padding: 1rem;
  color: #4a86ba;
}
.label-color {
  background-color: lightgrey;
  padding: 0.75rem;
}
.v-data-footer {
  display: none !important;
}
</style>

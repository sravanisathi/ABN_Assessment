<template>
  <div class="home">
    <v-row class="pa-2">
      <v-col cols="12">
        <v-autocomplete
          v-model="foodArray"
          @change="updateItems()"
          :items="itemData"
          filled
          chips
          color="white lighten-2"
          label="Select the Food item for Nutrition"
          item-text="title"
          item-value="title"
          multiple
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              @click="data.select"
              @click:close="remove(data.item)"
            >
              <v-avatar left>
                <v-img
                  :src="require(`../assets/images/${data.item.avatar}.jpg`)"
                ></v-img>
              </v-avatar>
              {{ data.item.title }}
            </v-chip>
          </template>
          <template v-slot:item="data">
            <template v-if="typeof data.item !== 'object'">
              <v-list-item-content v-text="data.item"></v-list-item-content>
            </template>
            <template v-else>
              <v-list-item-avatar>
                <img
                  :src="require(`../assets/images/${data.item.avatar}.jpg`)"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="data.item.title"></v-list-item-title>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(item, index) in items"
        :key="`${index}`"
        cols="12"
        md="6"
        lg="3"
      >
        <v-card
          class="mx-auto"
          max-width="400"
          @click="getFoodItemsData(item.title)"
        >
          <v-img
            class="align-end"
            height="200px"
            :src="require(`../assets/images/${item.avatar}.jpg`)"
          ></v-img>
          <v-card-title class="d-block" v-html="item.title"></v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-layout>
            <v-flex>
              <v-card-text class="scroll" v-html="item.subtitle"></v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Home",
  data: () => ({
    items: [
      {
        avatar: "rice",
        title: "Rice",
        subtitle:
          "<span class='font-weight-bold'>Rice</span> &mdash; Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia"
      },
      {
        avatar: "egg",
        title: "Eggs",
        subtitle:
          "<span class='font-weight-bold'>Eggs</span> &mdash; Some eggs are laid by female animals of many different species, including birds, reptiles, amphibians, mammals, and fish, and have been eaten by humans for thousands of years."
      },
      {
        avatar: "pizza",
        title: "pizza",
        subtitle:
          "<span class='font-weight-bold'>pizza</span> &mdash;Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients baked at a high temperature, traditionally in a wood-fired oven. A small pizza is sometimes"
      },
      {
        avatar: "meat",
        title: "Meat",
        subtitle:
          "<span class='font-weight-bold'>Meat</span> &mdash;Meat is animal flesh that is eaten as food. Humans have hunted and killed animals for meat since prehistoric times. The advent of civilization allowed the domestication of animals such as chickens, sheep, rabbits, pigs and cattle"
      },
      {
        avatar: "carrots",
        title: "carrots",
        subtitle:
          "<span class='font-weight-bold'>Carrots</span> &mdash; The carrot is a root vegetable, usually orange in colour, though purple, black, red, white, and yellow cultivars exist. They are a domesticated form of the wild carrot, Daucus carota, native to Europe and Southwestern Asia"
      },
      {
        avatar: "apples",
        title: "Apples",
        subtitle:
          "<span class='font-weight-bold'>Apples</span> &mdash; An apple is a sweet, edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today."
      }
    ],
    quantity: 1,
    foodDetails: [],
    foodArray: [],
    itemData: []
  }),
  mounted() {
    //checking for filter condition of selected food items

    this.itemData = this.items;
    if (this.foodArray.length >= 1) {
      this.foodArray.forEach(fa => {
        this.items = this.items.filter(el => {
          return el.title == fa;
        });
      });
    }
  },
  computed: {
    ...mapState(["nutritionData"])
  },
  watch: {
    nutritionData() {
      this.$router.push("/nutrition");
    }
  },
  methods: {
    //getting foodItems on click of a food item
    getFoodItemsData(foodItemsList) {
      this.foodDetails = [];
      this.foodDetails.push(this.quantity + " " + foodItemsList);
      const foodList = { ingr: this.foodDetails };
      this.$store.dispatch("getNutritionDataAction", foodList);
    },
    //Delete an item from the search that should also disapper from available food items
    remove(item) {
      const index = this.foodArray.indexOf(item.title);

      if (index >= 0 && this.foodArray.length > 1) {
        this.foodArray.splice(index, 1);
        this.items.splice(index, 1);
      } else if (this.foodArray.length == 1) {
        this.foodArray.splice(index, 1);
        this.items.splice(index, 1);
        this.items = this.itemData;
      }
    },
    //Based on the search condition updating available foodItems List on dashboard
    updateItems() {
      const foodItemData = this.itemData;
      this.items = [];
      this.foodArray.map(fa => {
        foodItemData.filter(el => {
          if (el.title == fa) {
            this.items.push(el);
          }
        });
        return this.items;
      });
    }
  }
};
</script>
<style>
.scroll {
  overflow-y: scroll;
  height: 9rem;
}

.v-label {
  color: white !important;
}
</style>

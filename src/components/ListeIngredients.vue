<template>
  <div>
    <div
      style="display: flex; justify-content: space-around"
      v-for="id_association in ingredients"
      :key="id_association"
    >
      <div class="case">
        <IngredientIcone
          :ingredient="ingredient_from_rhi(id_association)?.id"
        />
        {{ ingredient_from_rhi(id_association)?.fields.Name }}
        {{ rhi(id_association)?.fields.Quantity }}
        {{ rhi(id_association)?.fields.Unit }}
      </div>
    </div>
  </div>
</template>
<script>
import IngredientIcone from "@/components/IngredientIcone.vue";

export default {
  name: "ListeIngredients",
  props: {
    ingredients: { type: Array },
    IngredientIcone: { type: Array },
  },
  computed: {
    rhi() {
      return (id_association) => {
        return this.$store.getters["recette/getRecetteHasIngredientFromId"](
          id_association
        );
      };
    },
    ingredient_from_rhi() {
      return (id_association) => {
        let rhi =
          this.$store.getters["recette/getRecetteHasIngredientFromId"](
            id_association
          );
        let id = rhi?.fields.Ingredient[0];
        return this.$store.getters["ingredient/getIngredientFromId"](id);
      };
    },
  },
  components: {
    IngredientIcone,
  },
};
</script>
<style scoped></style>

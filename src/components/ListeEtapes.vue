<template>
  <div>
    <div
      style="display: flex; justify-content: space-around"
      v-for="id_name in etapes"
      :key="id_name"
    ></div>
    {{ name(id_name)?.fields.Name }}
    {{ name(id_name)?.fields.Description }}
    <div>ze component !</div>
  </div>
</template>
<script>
export default {
  name: "name",
  props: {
    etapes: { type: Array },
    ListeEtapes: { type: Array },
  },

  computed: {
    name() {
      return (id_name) => {
        return this.$store.getters["etape/getEtapeFromId"](id_name);
      };
    },
  },
  components: {},
};
</script>
<style scoped></style>

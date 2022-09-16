<template>
  <div>
    <span v-for="id in etapes" v-bind:key="id">
      {{ $store.getters["etape/getEtapeFromId"](id).fields.Name }}<br />
      {{ $store.getters["etape/getEtapeFromId"](id).fields.Description }}<br />
    </span>
  </div>
</template>
<script>
export default {
  name: "name",
  props: {
    etapes: { type: Array },
  },

  computed: {},
  components: {},
};
</script>
<style scoped></style>

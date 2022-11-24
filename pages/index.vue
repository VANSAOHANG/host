<template>
  <div id="home">
    <h1>Ok</h1>
  </div>
</template>

<script>

export default {
  model: 0,
  name: "IndexPage",
  head() {
    return {
      title: "CHOKCHEY FINANCE - HOME",
    };
  },

  data() {
    return {
      message: "",
    }
  },

  // methods: {
  //   async getExample() {
  //     const res = await this.$api.example.index();
  //     this.message = res.message;
  //   },
  // },

  // created() {
  //   this.getExample();
  // },
};
</script>

<style lang="scss" scoped>
@import "~assets/sass/pages/_home.scss";
</style>

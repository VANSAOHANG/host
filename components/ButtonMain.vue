<template>
  <b-link :to="link" class="btn-main rounded shadow-none border-0 text-decoration-none"> {{ title }} <b-icon-arrow-right-short></b-icon-arrow-right-short></b-link>
</template>
<script>
export default {
  name: 'button-main',
  props: ['title', 'link']

}

</script>
<style lang="scss">
@import '@/assets/sass/components/button';
</style>
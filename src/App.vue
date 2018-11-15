<template>
  <div id="app">
    <div class="container">
      <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    alert () {
      return this.$store.state.alert
    }
  },
  watch: {
    $route (to, from) {
      // clear alert on location change
      this.$store.dispatch('alert/clear')
    }
  }
}
</script>

<style lang="scss">
@import './assets/stylesheets/App.scss';

html {
    font-family: Ubuntu, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Cantarell, "Helvetica Neue", sans-serif;
}

body {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
}

main {
    flex: 1 0 auto;
}

h5 {
    margin-top: 30px;
}
</style>

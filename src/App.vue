<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
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

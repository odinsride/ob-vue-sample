<template>
  <li>
    <a class="dropdown-trigger" href="#!" data-target="useraccount">
      {{ user.email }}
      <i class="material-icons right">arrow_drop_down</i>
    </a>
  </li>
</template>

<script>
export default {
  name: 'Navlinks',
  computed: {
    user () {
      return this.$store.state.authentication.user
    }
  }
}
</script>

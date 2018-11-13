<template>
  <div class="navbar-fixed">
    <nav class="z-depth-1" role="navigation">
      <div class="nav-wrapper container">
        <router-link to="/" id="logo-container" class="brand-logo hide-on-med-and-down">
          <img src="@/assets/logo.png" width="21%" />
        </router-link>

        <ul class="right hide-on-med-and-down">
          <li>
            <a class="dropdown-button" href="#!" data-activates="useraccount">
              {{ email }}
              <i class="material-icons right">arrow_drop_down</i></a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data () {
    return {
      email: ''
    }
  },
  mounted() {
    this.email = localStorage.email || ''
  }
}
</script>
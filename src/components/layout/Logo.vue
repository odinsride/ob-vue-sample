<template>
  <span>
    <router-link to="/" id="logo-container" class="brand-logo hide-on-med-and-down">
      <img src="@/assets/logo.png" width="21%" />
    </router-link>

    <router-link to="/" id="logo-container" class="brand-logo center hide-on-large-only hide-on-small-only">
      <img src="@/assets/logo.png" width="45%" />
    </router-link>

    <router-link to="/" id="logo-container" class="brand-logo center hide-on-large-only hide-on-med-only">
      <img src="@/assets/logo.png" width="68%" />
    </router-link>
  </span>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

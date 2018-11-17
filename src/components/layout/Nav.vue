<template>
  <header>
    <Userlinks></Userlinks>
    <div class="navbar-fixed">
      <nav class="z-depth-1" role="navigation">
        <div class="nav-wrapper container">
          <Logo></Logo>

          <ul class="right hide-on-med-and-down">
            <Navlinks></Navlinks>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '@/components/layout/Logo'
import Navlinks from '@/components/layout/Navlinks'
import Userlinks from '@/components/layout/Userlinks'

export default {
  name: 'Nav',
  components: {
    Logo,
    Navlinks,
    Userlinks
  }
}
</script>

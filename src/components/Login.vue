<template>
  <div class="row">
    <div class="col s12 l4">
      <h5 class="ob-text-primary"><strong>Login</strong></h5>
    </div>

    <form class="col s12" @submit.prevent="handleSubmit">
      <div class="row">
        <div class="input-field col l4 s12">
          <i class="material-icons prefix ob-text-primary">email</i>
          <input v-model="email" type="email" id="inputEmail" class="validate" required>
          <label for="inputEmail">Email Address</label>
          <span class="helper-text" data-error="Invalid Email Format" />

        </div>
      </div>

      <div class="row">
        <div class="input-field col l4 s12">
          <i class="material-icons prefix ob-text-primary">lock</i>
          <input v-model="password" type="password" id="inputPassword" required>
          <label for="inputPassword">Password</label>
        </div>
      </div>

      <div class="row">
        <div class="col l4 s12">
          <button name="button" type="submit" class="btn waves-effect waves-light">
            Login
          </button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      submitted: false
    }
  },
  computed: {
    loggingIn () {
      return this.$store.state.authentication.status.loggingIn
    }
  },
  created () {
    // reset login status
    this.$store.dispatch('authentication/logout')
  },
  methods: {
    handleSubmit (e) {
      this.submitted = true
      const { email, password } = this
      const { dispatch } = this.$store
      if (email && password) {
        dispatch('authentication/login', { email, password })
      }
    }
  }
}
</script>

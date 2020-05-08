<template>
  <div>
    <div class="login-label">
      Login!
    </div>
    <form>
      <div class="input-wrapper">
        <input type="text" placeholder="ID" v-model="userInfo.username"><br/>
        <input type="password" placeholder="PW" v-model="userInfo.password">
      </div>
    </form>
    <button class="login-button" @click="login">
      Log in
    </button>
  </div>
</template>

<script>
import VuexMonitor from '../components/vuexMonitor'

export default {
  name: 'Main',
  components: { VuexMonitor },
  data () {
    const baseURL = 'http://localhost:3000/'
    return {
      baseURL,
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$axios.post(this.baseURL + 'login', this.userInfo)
        .then((res) => {
          this.$store.commit('updateSessionData', res.data)
        })
        .catch((e) => {
          console.log(e)
        })
    }
  }
}
</script>

<style scoped>

  .login-label {
    margin-top: 30px;
    font-size: 24px;
  }

  .input-wrapper {
    margin-top: 80px;
  }

  input {
    margin-top: 20px;
    width: 300px;
    padding: 10px;
    outline: none

  }

  .login-button {
    width: 200px;
    height: 42px;
    background-color: transparent;
    border: 1px solid #42b983;
    color: #42b983;
    font-size: 14px;
    font-weight: 700;
    margin-top: 80px;
  }
</style>

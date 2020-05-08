<template>
  <div>
    <h1>
      Monitor
    </h1>
    this.$store.state:
    {{this.$store.state}}
    <br/>
    <button @click="routeTo('/')">
      home
    </button>
    <button @click="routeTo('/subpage')">
      Subpage
    </button>
    <button @click="routeTo('/admin')">
      Admin
    </button>
  </div>
</template>

<script>
export default {
  name: 'vuexMonitor',
  methods: {
    routeTo (path) {
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style scoped>
  div {
    position: fixed;
    top: 80px;
    right: 80px;
    width: 400px;
    border: 1px solid #e9e9e9;
    box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.05);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    padding: 20px 20px 60px;
  }

  button {
    border: 1px solid #e9e9e9;
    margin: 12px;
    height: 32px;
    padding: 8px 16px;
    outline: none;
    cursor: pointer;
  }
</style>

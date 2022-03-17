<template>
  <the-header />
  <div class="container mt-4">
    <router-view />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
  .parallax {
    background-image: url('assets/img/background.jpg');

    height: 100%;
    width: 100%;

    position: relative;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  @media only screen and (max-device-width: 1366px) {
    .parallax {
      background-attachment: scroll;
    }
  }

  body, html, .container {
    background: none;
  }
</style>

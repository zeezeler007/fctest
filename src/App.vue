<script setup>
import navbar from './components/navbar.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <navbar />
  <main>
    <router-view />
  </main>
  <Footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: rgba(7, 3, 43);
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;    /* prevent horizontal scroll */
  width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

main {
  flex: 1;
  width: 100%;
}

</style>
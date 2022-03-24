<template>
  <div id="app">
    <h1>Ебань с формами и валидацией</h1>
    <hr />
    <companySettings />
  </div>
</template>

<script>
// import todoList from "./components/todoList.vue"; // импорт + прописываем в компонентах!
// import anyForm from "./components/anyForm.vue"; // импорт + прописываем в компонентах!
import companySettings from "./components/companySettings.vue"; // импорт + прописываем в компонентах!
export default {
  name: "App",
  components: {
    // todoList,
    // anyForm,
    companySettings,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

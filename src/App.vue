<template>
  <div id="app">
    <div id="nav">
      <router-link to="/concerts">Concerts</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/signin">Sign in</router-link>|
      <router-link to="/addconcert">Add Concert</router-link>|
      <router-link to="/deleteConcert">Delete Concert</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

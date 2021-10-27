<template>
  <aside>
    <h1>
      Vuex
    </h1>

    <ul>

      <li>
        <a href="https://github.com/CaioAFA/vue-vuex-samples" target="_blank">GitHub do Projeto</a>
      </li>

      <li>
        <router-link to="/basic-utilization">Utilização Básica - State</router-link>
      </li>

      <li>
        <router-link to="/map-state">Map State</router-link>
      </li>

      <li>
        <router-link to="/getters">Getters</router-link>
      </li>

      <li>
        <router-link to="/map-getters">Map Getters</router-link>
      </li>

      <li>
        <router-link to="/mutations">Mutations</router-link>
      </li>

      <li>
        <router-link to="/map-mutations">Map Mutations</router-link>
      </li>

      <li>
        <router-link to="/actions">Actions</router-link>
      </li>

      <li>
        <router-link to="/map-actions">Map Actions</router-link>
      </li>

    </ul>

  </aside>
</template>

<script>
export default {

}
</script>

<style scoped>
aside {
  width: 30vw;
  height: 100vh;
  background: rgb(0 70 58);
  border-radius: 0 4px 4px 0;
  max-width: 245px;
  overflow-y: auto;

  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

aside h1 {
  margin: 0;
  text-align: center;
  color: white;
  padding-top: 50px;
  text-shadow: 3px 3px black;
  font-size: 50px;
}

aside ul {
  list-style: none; /* Remove default bullets */
}

/* Bullet list configuration */
aside ul li::before {
  content: "\2022";  /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: white; /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
  text-shadow: 1px 1px 2px black;
}

aside ul li a{  
  margin-top: 30px;
  padding-left: 20px;
  text-decoration: none;
  display: inline-block;
  color: white;

  /* Less distance between the ul circle and the text */
  left: -22px;
  position: relative;

  /* Break line if necessary */
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
}

aside a:active{
  color: white;
}

aside a:visited{
  color: white;
}

aside a:hover{
  text-decoration: underline;
}

.link-active {
  color: navajowhite !important;
}

::-webkit-scrollbar {
width: 6px;
height: 6px;
}

::-webkit-scrollbar-track {
background: #f5f5f5;
border-radius: 10px;
}

::-webkit-scrollbar-thumb {
border-radius: 10px;
background: gray;  
}

::-webkit-scrollbar-thumb:hover {
background: #999;  
}
</style>
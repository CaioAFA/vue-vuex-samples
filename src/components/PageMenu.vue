<template>
  <aside>
    <h1>
      Vuex
    </h1>

    <ul>

      <li>
        <router-link to="/intro">Introdução (Módulos)</router-link>
      </li>

      <li>
        <router-link to="/">Utilização Básica</router-link>
      </li>

      <li>
        <router-link to="/">Map State</router-link>
      </li>

      <li>
        <router-link to="/">Getters</router-link>
      </li>

      <li>
        <router-link to="/">Map Getters</router-link>
      </li>

      <li>
        <router-link to="/">Mutations</router-link>
      </li>

      <li>
        <router-link to="/">Map Mutations</router-link>
      </li>

      <li>
        <router-link to="/">Actions</router-link>
      </li>

      <li>
        <router-link to="/">Map Actions</router-link>
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

aside a{
  /* One above the other */
  display: block;
  
  margin-top: 30px;
  padding-left: 20px;
  text-decoration: none;
  display: inline-block;

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
</style>
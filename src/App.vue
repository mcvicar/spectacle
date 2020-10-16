<template>
  <div id="app">
    <header id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </header>
    <section>
    <router-view/>
    </section>
    <footer>
      Made by <a href="http://www.menace.co.nz">mcvicar</a> |
      Get the code on <a href="https://github.com/mcvicar/spectacle">Github</a>
    </footer>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: "liga","kern";
  font-variant-numeric: proportional-nums;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, Fira Sans, sans-serif!important;
  font-size: 1rem;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 80rem;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
h1 {
  font-size: 2rem;
}
dt {
  font-weight: bold;
}
.crud-bar {
    border-top: 8px solid #78c0a8;
    text-align: right;
    margin-top: 40px;
    padding-top: 40px;
    padding-right: 40px;
}

input[list="*"],
input[type="text"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="time"],
input[type="url"],
textarea,
select
{
  -webkit-transition: all 0.30s ease-in-out;
  -moz-transition: all 0.30s ease-in-out;
  -ms-transition: all 0.30s ease-in-out;
  -o-transition: all 0.30s ease-in-out;
  outline: none;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  background: #fff;
  margin-bottom: 4%;
  border: 1px solid #ccc;
  padding: 3%;
  color: #555;
}
input[list="*"],
input[type="text"]:focus,
input[type="date"]:focus,
input[type="datetime"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
input[type="search"]:focus,
input[type="time"]:focus,
input[type="url"]:focus,
textarea:focus,
select:focus
{
  box-shadow: 0 0 5px #43D1AF;
  padding: 3%;
  border: 1px solid #43D1AF;
}

input[type="submit"],
input[type="button"]{
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 1.5%;
  background: #43D1AF;
  border-bottom: 2px solid #30C29E;
  border-top-style: none;
  border-right-style: none;
  border-left-style: none;
  color: #fff;
  text-transform: uppercase;
  margin-left:20px;
}
input[type="submit"]:hover,
input[type="button"]:hover{
  background: #2EBC99;
}

footer {
  font-size:0.7rem;
  color:#999;
}
footer a {
  color:#999;
}
</style>

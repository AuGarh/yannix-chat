<template>
  <div id="app">
    <router-view class="container" />
  </div>
</template>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, system-ui, Roboto,
    "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
    "Malgun Gothic", sans-serif;
}

body {
  background-color: #f4f0cf;
}

.container {
  max-width: 375px;
  height: 97.5vh;
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 1.5rem;
  box-shadow: 0px 1px 20px #f4f0cf55;
}
</style>

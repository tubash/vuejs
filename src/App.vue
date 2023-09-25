<template>
  <div class="wrapper">
    <h1>
      Please run <span class="invert">npm run storybook</span> for the homework
    </h1>
  </div>
</template>

<style>
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}
.invert {
  background-color: #000;
  color: #fff;
  padding: 0 15px;
  border-radius: 10px;
}
html,
body {
  font-family: "Anonymous Pro", monospace;
  font-family: "Roboto", sans-serif;
  height: 100%;
  min-height: 100% !important;
  margin: auto;
}
</style>

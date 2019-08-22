<template>
    <div class="main">
        <div style="background-color:red"><span>abc</span></div>
        <!-- <div style="background-color:blue"><span>bcd</span></div> -->
    </div>
</template>
<style>
.main {
  width: 300px;
  height: 300px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  margin: auto;
}
.main div {
    width: 70px;
    height: 70px;
    margin: auto;
    border: 1px solid #c3c3c3;
}
span {
  display: block;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
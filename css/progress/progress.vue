<template>
  <div class="progress-item">
    <div class="progress-container">
      <div class="progress"></div>
      <div class="progress-complete" :style="{'width': num}"></div>
    </div>
    <span>{{num}}</span>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: String,
      default: '0%'
    }
  },
  data () {
    return {}
  }
};
</script>

<style>
  .progress-item {
    width: 500px;
    height: 30px;
    display: flex;
    align-items: center;
  }

  .progress-item > span {
    line-height: 30px;
    font-size: 14px;
    margin-left: 6px;
  }

  .progress-container {
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 6px;
    overflow: hidden;
  }

  .progress {
    width: 100%;
    height: 8px;
    background-color: #e0e0e0;
  }

  .progress-complete {
    position: absolute;
    height: 8px;
    border-radius: 6px;
    background-color: #f24360;
    left: 0;
    top: 0;
  }
</style>
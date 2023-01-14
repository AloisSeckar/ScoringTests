<template>
  <div>
    <TheHeader />
    <TheQuestion />
    <TheControls />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useQuestionStore().loadQuestions()
</script>

<style>
.question-box {
  border: 2px solid black;
  width: 60%;
  margin: 0 auto;
}
.question-text {
  border: 1px solid black;
  background-color: navy;
  color: white;
  padding: 5px;
  font-weight: bold;
}
.question-answer {
  border: 1px solid black;
  border-collapse: true;
  padding: 5px;
}
.controls-box {
  border: 2px solid black;
  background-color: navy;
  width: 60%;
  margin: 0 auto;
  margin-top: 10px;
  padding: 10px;
  text-align: center;
}
</style>
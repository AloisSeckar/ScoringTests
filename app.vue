<template>
  <div>
    <TheHeader />
    <TheQuestion />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useQuestionsStore().loadQuestions()
</script>

<style>
.question-box {
  border: 2px solid black;
}
.question-text {
  border: 1px solid yellow;
}
.question-answer {
  border: 1px solid red;
}
</style>
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

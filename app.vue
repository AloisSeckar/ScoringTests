<template>
  <div>
    <TheHeader />
    <div class="mx-auto p-2 w-full min-[740px]:w-4/5">
      <TheQuestion />
      <TheControls />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useQuestionStore().loadQuestions()
</script>

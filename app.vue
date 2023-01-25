<template>
  <div>
    <TheModal v-show="useModalStore().show"/>
    <TheHeader />
    <div class="mx-auto p-2 w-full min-[740px]:w-4/5">
      <TheQuestion />
      <TheControls />
      <TheResult v-if="useQuestionStore().finished" />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useQuestionStore().resetTest()
</script>

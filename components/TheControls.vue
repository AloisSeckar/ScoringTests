<template>
  <div class="controls-box">
    <input
      class="control"
      type="button"
      value="Přechozí otázka"
      :disabled="prevDisabled"
      @click="data.previousQuestion"
    >
    <input
      v-if="!currentAnswer?.marked"
      class="control"
      type="button"
      value="Označit otázku"
      :disabled="data.finished"
      @click="data.markAnswer(data.current)"
    >
    <input
      v-if="currentAnswer?.marked"
      class="control"
      type="button"
      value="Resetovat otázku"
      :disabled="data.finished"
      @click="data.resetAnswer(data.current)"
    >
    <input
      v-if="!data.finished"
      class="control"
      type="button"
      value="Vyhodnotit test"
      @click="data.evaluateTest()"
    >
    <input
      v-if="data.finished"
      class="control"
      type="button"
      value="Nový test"
      @click="data.resetTest()"
    >
    <input
      class="control"
      type="button"
      value="Další otázka"
      :disabled="nextDisabled"
      @click="data.nextQuestion"
    >
  </div>
</template>

<script setup lang="ts">
const data = useQuestionStore()
const currentAnswer = computed(() => data.getCurrentAnswer)

const prevDisabled = computed(() => data.current < 1)
const nextDisabled = computed(() => data.current >= useRuntimeConfig().public.testLength - 1)
</script>

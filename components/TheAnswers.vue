<template>
  <div class="question-answer">
    <div class="question-answer-item">
      <input
        id="answer1"
        type="checkbox"
        name="answer"
        :checked="answer1checked"
        :disabled="inputDisabled"
        @change="$emit('selectAnswer', 'a', $event.target)"
      >
      <label for="answer1" v-html="answer1" />
    </div>
    <div class="question-answer-item">
      <input
        id="answer2"
        type="checkbox"
        name="answer"
        :checked="answer2checked"
        :disabled="inputDisabled"
        @change="$emit('selectAnswer', 'b', $event.target)"
      >
      <label for="answer2" v-html="answer2" />
    </div>
    <div class="question-answer-item">
      <input
        id="answer3"
        type="checkbox"
        name="answer"
        :checked="answer3checked"
        :disabled="inputDisabled"
        @change="$emit('selectAnswer', 'c', $event.target)"
      >
      <label for="answer3" v-html="answer3" />
    </div>
    <div class="question-answer-item">
      <input
        id="answer4"
        type="checkbox"
        name="answer"
        :checked="answer4checked"
        :disabled="inputDisabled"
        @change="$emit('selectAnswer', 'd', $event.target)"
      >
      <label for="answer4" v-html="answer4" />
    </div>
  </div>
</template>

<script setup lang="ts">
const data = useQuestionStore()
const currentQuestion = computed(() => data.getCurrentQuestion)
const currentAnswer = computed(() => data.getCurrentAnswer)

const answer1 = computed(() => currentQuestion.value?.answer1)
const answer2 = computed(() => currentQuestion.value?.answer2)
const answer3 = computed(() => currentQuestion.value?.answer3)
const answer4 = computed(() => currentQuestion.value?.answer4)

const answer1checked = computed(() => currentAnswer.value?.a)
const answer2checked = computed(() => currentAnswer.value?.b)
const answer3checked = computed(() => currentAnswer.value?.c)
const answer4checked = computed(() => currentAnswer.value?.d)

const inputDisabled = computed(() => data.finished)

defineEmits<{(e: 'selectAnswer', id: string, element: HTMLInputElement): void}>()
</script>

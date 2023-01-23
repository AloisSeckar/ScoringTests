<template>
    <div class="controls-box">
        <input class="control" type="button" value="Přechozí otázka" @click="data.previousQuestion" :disabled="prevDisabled" />
        <input class="control" type="button" value="Vyhodnotit" @click="submitAnswer" />
        <input class="control" type="button" value="Vymazat" @click="data.resetAnswer(data.current)" />
        <input class="control" type="button" value="Další otázka" @click="data.nextQuestion" :disabled="nextDisabled" />
        <div class="result good" v-show="currentAnswer?.answered && currentAnswer?.correct">SPRÁVNĚ</div>
        <div class="result bad" v-show="currentAnswer?.answered && !currentAnswer?.correct">ŠPATNĚ</div>
    </div>
</template>

<script setup lang="ts">
const data = useQuestionStore()
const currentQuestion = computed(() => data.getCurrentQuestion)
const currentAnswer = computed(() => data.getCurrentAnswer)

const prevDisabled = computed(() => data.current < 1)
const nextDisabled = computed(() => data.current >= useRuntimeConfig().public.testLength - 1)

const submitAnswer = () => {
    console.log(currentQuestion.value.solution)
    console.log(data.getAnswerString(data.current))
    currentAnswer.value.correct = currentQuestion.value.solution === data.getAnswerString(data.current)
    currentAnswer.value.answered = true
}
</script>

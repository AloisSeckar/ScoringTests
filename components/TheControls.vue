<template>
    <div class="controls-box">
        <input class="control" type="button" value="Odpovědět" @click="submitAnswer" />
        <input class="control" type="button" value="Další otázka" @click="resetAnswer" />
        <div class="result good" v-show="currentAnswer?.answered && currentAnswer?.correct">SPRÁVNĚ</div>
        <div class="result bad" v-show="currentAnswer?.answered && !currentAnswer?.correct">ŠPATNĚ</div>
    </div>
</template>

<script setup lang="ts">
const data = useQuestionStore()
const currentQuestion = computed(() => data.getCurrentQuestion)
const currentAnswer = computed(() => data.getCurrentAnswer)

const submitAnswer = () => {
    console.log(currentQuestion.value.solution)
    console.log(data.getAnswerString(data.current))
    currentAnswer.value.correct = currentQuestion.value.solution === data.getAnswerString(data.current)
    currentAnswer.value.answered = true
}

const resetAnswer = () => {
    data.clearAnswer(data.current)
}
</script>

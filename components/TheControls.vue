<template>
    <div class="controls-box">
        <input class="control" type="button" value="Odpovědět" @click="submitAnswer" />
        <input class="control" type="button" value="Další otázka" @click="resetAnswer" />
        <div class="result good" v-show="data.answer.answered && data.answer.correct">SPRÁVNĚ</div>
        <div class="result bad" v-show="data.answer.answered && !data.answer.correct">ŠPATNĚ</div>
    </div>
</template>

<script setup lang="ts">
const data = useQuestionStore()
const submitAnswer = () => {
    console.log(data.current.solution)
    console.log(data.getAnswerString)
    data.answer.correct = data.current.solution === data.getAnswerString
    data.answer.answered = true
}
const resetAnswer = () => {
    data.setQuestion()
}
</script>

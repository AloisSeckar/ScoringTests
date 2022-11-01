<template>
    <div class="controls-box">
        <input type="button" value="Odpovědět" @click="submitAnswer" />
        <input type="button" value="Další otázka" @click="resetAnswer" />
        <div class="result" v-show="answer.answered && answer.correct">SPRÁVNĚ</div>
        <div class="result" v-show="answer.answered && !answer.correct">ŠPATNĚ</div>
    </div>
</template>

<script setup lang="ts">
const answer = useAnswerStore()
const submitAnswer = () => {
    answer.correct = answer.current.solution === answer.getAnswerString
    answer.answered = true
}
const resetAnswer = () => {
    answer.setQuestion()
}
</script>

<style>
div.result {
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding-top: 10px;
}
</style>


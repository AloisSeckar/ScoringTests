<template>
    <div class="controls-box">
        <input type="button" value="Odpovědět" @click="submitAnswer" />
        <div class="result" v-show="answer.answered && answer.correct">SPRÁVNĚ</div>
        <div class="result" v-show="answer.answered && !answer.correct">ŠPATNĚ</div>
    </div>
</template>

<script setup lang="ts">
const answer = useAnswerStore()
const submitAnswer = () => {
    answer.correct = answer.current.solution === useAnswerStore().getAnswerString
    answer.answered = true
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


<template>
    <div class="controls-box">
        <input class="control" type="button" value="Odpovědět" @click="submitAnswer" />
        <input class="control" type="button" value="Další otázka" @click="resetAnswer" />
        <div class="result good" v-show="data.answers[current]?.answered && data.answers[current]?.correct">SPRÁVNĚ</div>
        <div class="result bad" v-show="data.answers[current]?.answered && !data.answers[current]?.correct">ŠPATNĚ</div>
    </div>
</template>

<script setup lang="ts">
const data = useQuestionStore()
const current = computed(() => data.current)


const submitAnswer = () => {
    console.log(data.questions[current.value].solution)
    console.log(data.getAnswerString)
    data.answers[current.value].correct = data.questions[current.value].solution === data.getAnswerString(current.value)
    data.answers[current.value].answered = true
}

const resetAnswer = () => {
    data.clearAnswer(current.value)
}
</script>

<template>
    <div class="controls-box">
        <input class="control" type="button" value="Přechozí otázka" @click="data.previousQuestion" :disabled="prevDisabled" />
        <input class="control" type="button" value="Označit" @click="data.markAnswer(data.current)" v-if="!currentAnswer?.marked"/>
        <input class="control" type="button" value="Resetovat" @click="data.resetAnswer(data.current)" v-if="currentAnswer?.marked" />
        <input class="control" type="button" value="Vyhodnotit" @click="data.evaluateTest()" />
        <input class="control" type="button" value="Další otázka" @click="data.nextQuestion" :disabled="nextDisabled" />
    </div>
</template>

<script setup lang="ts">
const data = useQuestionStore()
const currentAnswer = computed(() => data.getCurrentAnswer)

const prevDisabled = computed(() => data.current < 1)
const nextDisabled = computed(() => data.current >= useRuntimeConfig().public.testLength - 1)
</script>

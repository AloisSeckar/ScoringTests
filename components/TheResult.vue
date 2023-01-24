<template>
    <div :class="['result-box', good ? 'result-good' : 'result-bad']">
        <div class="result-header" v-if="good">
            Gratulujeme k úspěšnému složení testu zapisovatele
        </div>
        <div class="result-header" v-else>
            Test nebyl úspěšný :(
        </div>
        <div class="text-xl">
            Výsledek: <strong>{{ score }} %</strong>  (limit 70 %)
        </div>
        <div>
            Otázek: <strong>{{ total }}</strong>
        </div>
        <div>
            Správně: <strong>{{ correct }}</strong>
        </div>
    </div>
</template>

<script setup lang="ts">
const total = computed(() => useQuestionStore().totalQuestions)
const correct = computed(() => useQuestionStore().correctAnswers)
const score = computed(() => (correct.value / total.value * 100))
const good = computed(() => score.value >= 70)
</script>
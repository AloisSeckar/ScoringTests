<template>
    <div class="controls-box">
        Otázek: {{ total }}
        <br />
        Správně: {{ correct }}
        <br />
        Výsledek: {{ score }}
    </div>
</template>

<script setup lang="ts">
const total = computed(() => useQuestionStore().totalQuestions)
const correct = computed(() => useQuestionStore().correctAnswers)
const score = computed(() => (correct.value / total.value * 100) + "%")
</script>
<template>
    <div>
        <p>Zde bude mechanismus zobrazování náhodných testových otázek</p>
    </div>
    <div v-for="question in questions">
        <TheQuestion :data="question" />
    </div>
</template>

<style scoped>
p {
    text-align: justify;
}
</style>


<script setup lang="ts">

import questions from "@/data/sampleQuestions"

</script>
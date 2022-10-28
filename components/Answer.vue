<template>
    <div class="question-answer">
        <div v-html="answer"></div>
        <input v-if="multiple" type="checkbox" :name="id" />
        <input v-if="!multiple" type="radio" :name="id" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    id: { type: String, required: true },
    answer: { type: String, required: true },
    multiple: { type: Boolean, required: true },
})
</script>
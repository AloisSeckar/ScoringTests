<template>
    <div class="question-answer">
        <div v-html="answer"></div>
        <input v-if="multiple" type="checkbox" name="a1" />
        <input v-if="!multiple" type="radio" name="a1" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    answer: { type: String, required: true },
    multiple: { type: Boolean, required: true },
})
</script>
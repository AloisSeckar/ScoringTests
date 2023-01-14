<template>
    <div class="question-answer">
        <div v-html="answer1"></div>
        <input type="checkbox" name="answer" @change="$emit('selectAnswer', 'a', $event.target)" />
        <div v-html="answer2"></div>
        <input type="checkbox" name="answer" @change="$emit('selectAnswer', 'b', $event.target)" />
        <div v-html="answer3"></div>
        <input type="checkbox" name="answer" @change="$emit('selectAnswer', 'c', $event.target)" />
        <div v-html="answer4"></div>
        <input type="checkbox" name="answer" @change="$emit('selectAnswer', 'd', $event.target)" />
    </div>
</template>

<script setup lang="ts">

const data = useQuestionStore()
const answer1 = computed(() => data.current?.answer1);
const answer2 = computed(() => data.current?.answer2);
const answer3 = computed(() => data.current?.answer3);
const answer4 = computed(() => data.current?.answer4);

defineEmits<{
    (e: 'selectAnswer', id: string, element: HTMLInputElement): void
}>()
</script>
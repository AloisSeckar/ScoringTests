<template>
    <div class="question-answer">
        <div v-html="data.current.answer1"></div>
        <input :type="inputType" name="answer" @change="$emit('selectAnswer', 'a', data.current.multiple, $event.target)" />
        <div v-html="data.current.answer2"></div>
        <input :type="inputType" name="answer" @change="$emit('selectAnswer', 'b', data.current.multiple, $event.target)" />
        <div v-html="data.current.answer3"></div>
        <input :type="inputType" name="answer" @change="$emit('selectAnswer', 'c', data.current.multiple, $event.target)" />
        <div v-html="data.current.answer4"></div>
        <input :type="inputType" name="answer" @change="$emit('selectAnswer', 'd', data.current.multiple, $event.target)" />
    </div>
</template>

<script setup lang="ts">

const data = useQuestionStore()
const inputType = computed(() => data.current.multiple ? 'checkbox' : 'radio');

defineEmits<{
    (e: 'selectAnswer', id: string, multiple: boolean, element: HTMLInputElement): void
}>()
</script>
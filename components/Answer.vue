<template>
    <div class="question-answer">
        <div v-html="answer"></div>
        <input v-if="multiple" type="checkbox" :name="id" @change="$emit('selectAnswer', id, true, $event.target)" />
        <input v-if="!multiple" type="radio" :name="id" @change="$emit('selectAnswer', id, false, $event.target)" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    id: { type: String, required: true },
    answer: { type: String, required: true },
    multiple: { type: Boolean, required: true },
})
defineEmits<{
  (e: 'selectAnswer', id: string, multiple: boolean, element: HTMLInputElement): void
}>()
</script>
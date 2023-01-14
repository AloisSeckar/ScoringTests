<template>
    <div class="question-answer">
        <div class="question-answer-item">
            <input id="answer1" type="checkbox" name="answer" @change="$emit('selectAnswer', 'a', $event.target)" />
            <label for="answer1" v-html="answer1"></label>
        </div>
        <div class="question-answer-item">
            <input id="answer2" type="checkbox" name="answer" @change="$emit('selectAnswer', 'b', $event.target)" />
            <label for="answer2" v-html="answer2"></label>
        </div>
        <div class="question-answer-item">
            <input id="answer3" type="checkbox" name="answer" @change="$emit('selectAnswer', 'c', $event.target)" />
            <label for="answer3" v-html="answer3"></label>
        </div>
        <div class="question-answer-item">
            <input id="answer4" type="checkbox" name="answer" @change="$emit('selectAnswer', 'd', $event.target)" />
            <label for="answer4" v-html="answer4"></label>
        </div>
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
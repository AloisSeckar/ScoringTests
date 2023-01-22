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
const currentQuestion = computed(() => data.questions[data.current])
const answer1 = computed(() => currentQuestion.value?.answer1);
const answer2 = computed(() => currentQuestion.value?.answer2);
const answer3 = computed(() => currentQuestion.value?.answer3);
const answer4 = computed(() => currentQuestion.value?.answer4);

defineEmits<{
    (e: 'selectAnswer', id: string, element: HTMLInputElement): void
}>()
</script>
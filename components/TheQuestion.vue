<template>
    <div class="question-box">
        <div class="question-text" v-html="currentQuestion"></div>
        <div>
            <TheAnswers @select-answer="onSelectAnswer"/>
        </div>
    </div>
</template>

<script setup lang="ts">

const data = useQuestionStore()
const currentQuestion = computed(() => data.questions[data.current]?.question)
const currentAnswer = computed(() => data.answers[data.current])

const onSelectAnswer = (id: string, element: HTMLInputElement) => {
    switch (id) {
        case 'a':
            currentAnswer.value.a = element.checked
            break;
        case 'b':
            currentAnswer.value.b = element.checked
            break;
        case 'c':
            currentAnswer.value.c = element.checked
            break;
        case 'd':
            currentAnswer.value.d = element.checked
            break;
    }
}

</script>
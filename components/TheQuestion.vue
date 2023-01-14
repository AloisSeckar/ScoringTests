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
const currentQuestion = computed(() => data.current?.question)

const onSelectAnswer = (id: string, element: HTMLInputElement) => {
    switch (id) {
        case 'a':
            data.answer.a = element.checked
            break;
        case 'b':
            data.answer.b = element.checked
            break;
        case 'c':
            data.answer.c = element.checked
            break;
        case 'd':
            data.answer.d = element.checked
            break;
    }
}

</script>
<template>
    <div :class="['question-box', boxClass]">
        <div class="question-text" v-html="currentQuestion?.question"></div>
        <div>
            <TheAnswers @select-answer="onSelectAnswer"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const data = useQuestionStore()
const currentQuestion = computed(() => data.getCurrentQuestion)
const currentAnswer = computed(() => data.getCurrentAnswer)

const boxClass = computed(() => {
    if (data.finished) {
        if (data.getCurrentAnswer?.correct) {
            return 'question-box-good'
        } else {
            return 'question-box-bad'
        }
    } else {
        if (data.getCurrentAnswer?.marked) {
            return 'question-box-marked'
        } else {
            return ''
        }
    }
})

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
<template>
    <div class="question-box">
        <div class="question-text" v-html="data.current.question"></div>
        <div>
            <TheAnswers @select-answer="onSelectAnswer"/>
        </div>
    </div>
</template>

<script setup lang="ts">

const data = useQuestionStore()

const onSelectAnswer = (id: string, multiple: boolean, element: HTMLInputElement) => {
    if (!multiple) {
        data.clearAnswer()
    }
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
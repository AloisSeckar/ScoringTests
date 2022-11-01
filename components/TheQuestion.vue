<template>
    <div class="question-box">
        <div class="question-text" v-html="answer.current.question"></div>
        <div>
            <TheAnswers @select-answer="onSelectAnswer"/>
        </div>
    </div>
</template>

<script setup lang="ts">

const answer = useAnswerStore()

const onSelectAnswer = (id: string, multiple: boolean, element: HTMLInputElement) => {
    if (!multiple) {
        answer.$reset()
    }
    switch (id) {
        case 'a':
            answer.a = element.checked
            break;
        case 'b':
            answer.b = element.checked
            break;
        case 'c':
            answer.c = element.checked
            break;
        case 'd':
            answer.d = element.checked
            break;
    }
}

</script>
<template>
    <div class="question-box">
        <div class="question-text" v-html="data.question"></div>
        <div>
            <Answer id="a1" :answer="data.answer1" :multiple="data.multiple" @select-answer="onSelectAnswer"/>
            <Answer id="a2" :answer="data.answer2" :multiple="data.multiple" @select-answer="onSelectAnswer" />
            <Answer id="a3" :answer="data.answer3" :multiple="data.multiple" @select-answer="onSelectAnswer" />
            <Answer id="a4" :answer="data.answer4" :multiple="data.multiple" @select-answer="onSelectAnswer" />
        </div>
    </div>
</template>

<script setup lang="ts">

import Question from '@/data/Question'

const data: Question = useAnswerStore().current

const onSelectAnswer = (id: string, multiple: boolean, element: HTMLInputElement) => {
    const answer = useAnswerStore()
    if (!multiple) {
        answer.$reset()
    }
    switch (id) {
        case 'a1':
            answer.a1 = element.checked
            break;
        case 'a2':
            answer.a2 = element.checked
            break;
        case 'a3':
            answer.a3 = element.checked
            break;
        case 'a4':
            answer.a4 = element.checked
            break;
    }
}

</script>
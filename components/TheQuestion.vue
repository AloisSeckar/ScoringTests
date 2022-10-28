<template>
    <div class="question-box">
        <div class="question-text" v-html="data.question"></div>
        <div>
            <Answer id="a1" :answer="data.answer1" :multiple="data.multiple" />
            <Answer id="a2" :answer="data.answer2" :multiple="data.multiple" />
            <Answer id="a3" :answer="data.answer3" :multiple="data.multiple" />
            <Answer id="a4" :answer="data.answer4" :multiple="data.multiple" />
        </div>
    </div>
</template>

<script setup lang="ts">

import Question from '@/data/Question'

const data: Question = useQuestionsStore().getRandomQuestion

</script>
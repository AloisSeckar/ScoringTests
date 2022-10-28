<template>
    <div class="question-box">
        <div class="question-text" v-html="data.question"></div>
        <div>
            <Answer :answer="data.answer1" :multiple="data.multiple" />
            <Answer :answer="data.answer2" :multiple="data.multiple" />
            <Answer :answer="data.answer3" :multiple="data.multiple" />
            <Answer :answer="data.answer4" :multiple="data.multiple" />
        </div>
    </div>
</template>

<script setup lang="ts">

import Question from '@/data/Question'
import { PropType } from 'vue'

const props = defineProps({
    data: { type: Object as PropType<Question>, required: true},
})
</script>
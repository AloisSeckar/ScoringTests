<template>
  <div class="nav-box">
    Otázka <strong>{{ current }}</strong> z <strong>{{ total }}</strong>
    /
    označených: <strong>{{ marked }}</strong>
  </div>
</template>

<script setup lang="ts">
const current = computed(() => useQuestionStore().current + 1)
const total = computed(() => useQuestionStore().totalQuestions)
const marked = computed(() => useQuestionStore().answers.filter(a => a.marked).length)
</script>

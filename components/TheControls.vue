<template>
    <div class="controls-box">
        <input type="button" value="Odpovědět" @click="submitAnswer" />
    </div>
</template>

<script setup lang="ts">

const submitAnswer = () => alert("clicked")

</script>


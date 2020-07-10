<template>
    <div class="next-input">
        1
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'next-input',
    props: {
        value: {
            type: [String, Number],
            default: '',
        },
    },
    setup() {

    },
});
</script>

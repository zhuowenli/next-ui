<template>
    <i :class="'next-icon-' + name" />
</template>

<script>
import { defineComponent, toRefs } from 'vue';
export default defineComponent({
    name: 'next-icon',
    props: {
        name: String,
    },
    setup(props) {
        return toRefs(props);
    },
});
</script>

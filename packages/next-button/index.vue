<template>
    <RouterLink
        v-if="to"
        :to="to"
        :replace="replace"
        :disabled="disabled || loading"
        :class="[
            type ? 'next-button--' + type : '',
            buttonSize ? 'next-button--' + buttonSize : '',
            { 'is-disabled': disabled, 'is-loading': loading },
        ]"
        class="next-button"
        @click="onClickAction"
    >
        <NextIcon v-if="loading" name="loading" />
        <slot />
    </RouterLink>

    <a
        v-else-if="href"
        class="next-button"
        :href="href"
        :target="target"
        :disabled="disabled || loading"
        :class="[
            type ? 'next-button--' + type : '',
            buttonSize ? 'next-button--' + buttonSize : '',
            { 'is-disabled': disabled, 'is-loading': loading },
        ]"
        @click="onClickAction"
    >
        <NextIcon v-if="loading" name="loading" />
        <slot />
    </a>

    <Component
        :is="isMiniapp ? 'div' : 'button'"
        v-else
        :disabled="disabled || loading"
        :type="nativeType"
        class="next-button"
        :class="[
            type ? 'next-button--' + type : '',
            buttonSize ? 'next-button--' + buttonSize : '',
            { 'is-disabled': disabled, 'is-loading': loading },
        ]"
        @click="onClickAction"
    >
        <NextIcon v-if="loading" name="loading" />
        <slot />
    </Component>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { isMiniapp } from '@services/dom';
import NextIcon from '@packages/next-icon';

export default defineComponent({
    name: 'next-button',
    components: { NextIcon },
    props: {
        href: {
            type: String,
            default: '',
        },
        target: {
            type: String,
            default: '',
        },

        // https://router.vuejs.org/zh/api/#to
        to: {
            type: [Object, String],
            default: () => '',
        },
        replace: Boolean,

        type: {
            type: String,
            default: 'default',
        },
        size: {
            type: String,
            default: '',
        },
        nativeType: {
            type: String,
            default: 'button',
        },
        loading: Boolean,
        disabled: Boolean,
    },

    setup(props) {
        const buttonSize = computed(() => props.size);

        return {
            ...props,
            buttonSize,
            isMiniapp,
        };
    },
});
</script>

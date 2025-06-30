<template>
    <label v-if="label" :for="formId" :class="class" class="block text-sm font-medium text-gray-700">{{ label
        }}</label>
    <select v-model="model" :required="required" :class="inputClass" :id="formId"
        class="w-full mt-1 mb-3 p-2 border border-gray-300 outline-none rounded-[5px] focus:ring-primary focus:border-primary">
        <slot />
    </select>
</template>

<script lang="ts" setup>
import { genRand } from '@/utils';
const props = defineProps(['class', 'inputClass', 'label', 'required', 'disabled']);
const formId = `input-${genRand(10)}`;
const model = defineModel<string>();
</script>

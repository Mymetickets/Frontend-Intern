<template>
    <BaseInput
    class="w-full"
    v-model="password"
    name="password"
    :type="visible ? 'text': 'password'"
    placeholder="Enter password"
    />
    <span class="py-7 cursor-pointer" @click="toggle"
        >
        <font-awesome-icon v-if="visible"  :icon="['fas', 'eye-slash']" />
        <font-awesome-icon v-else :icon="['fas', 'eye']" />
    </span>
</template>
<script setup>
    import { ref } from "vue";
    import BaseInput from "@/components/FormInputs/InputBox.vue";
    import useVisibilityToggle from "@/hooks/visibility-toggle";
    const { visible, toggle } = useVisibilityToggle(false);
    let password = ref(null)
</script>
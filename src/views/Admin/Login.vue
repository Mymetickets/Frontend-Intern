<template>
  <div class="bg-[#F3F3F3] min-h-screen">
    <div
      class="bg-contain bg-left-top bg-no-repeat h-32 w-auto"
      :style="{ backgroundImage: `url(${imgTwo})` }"
    ></div>
    <div>
      <div></div>
      <div
        class="max-w-md mx-auto w-auto p-6 shadow-lg rounded bg-white z-50 py-[30px] px-10"
      >
        <form>
          <h2 class="text-2xl font-bold mb-4 text-center">{{ title }}</h2>
          <div class="flex items-center">
            <BaseInput
              class="w-full"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <span class="py-7"
              ><font-awesome-icon :icon="['fas', 'envelope']"
            /></span>
          </div>

          <div class="flex items-center">
            <PasswordInput />
          </div>
          <BaseButton>{{ buttonText }}</BaseButton>
        </form>
      </div>
    </div>
    <div
      class="bg-contain bg-right-bottom bg-no-repeat h-32 w-auto"
      :style="{ backgroundImage: `url(${imgOne})` }"
    ></div>
  </div>
</template>

<script setup>
    import BaseInput from "@/components/FormInputs/InputBox.vue";
    import imgTwo from "@/assets/imgTwo.png";
    import imgOne from "@/assets/imgOne.png";
    import BaseButton from "@/components/FormInputs/Button.vue";
    import useVisibilityToggle from "@/hooks/visibility-toggle";
    import PasswordInput from "@/components/FormInputs/PasswordInput.vue";

    const title = "Admin Login";
    const buttonText = "Login";

    const { visible, toggle } = useVisibilityToggle(false);

</script>
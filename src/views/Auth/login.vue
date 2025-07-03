<template>
  <div class="bg-[#F3F3F3] min-h-screen">
    <div
      class="bg-contain bg-left-top bg-no-repeat h-32 w-auto"
      :style="{ backgroundImage: `url(${imgTwo})` }"
    ></div>
    <div
      class="max-w-md mx-auto w-auto p-6 shadow-lg rounded bg-white z-50 py-[30px] px-10"
    >
      <form @submit.prevent="handleLogin">
        <div class="flex items-center">
          <BaseInput
            class="w-full"
            v-model="email"
            name="email"
            type="email"
            placeholder="Enter email"
          />
          <span class="py-7"
            ><font-awesome-icon :icon="['fas', 'envelope']"
          /></span>
        </div>
        <div class="flex items-center">
          <PasswordInput v-model="password" />
        </div>
        <div class="py-4">
          <CheckBox label=" Remember me" />
        </div>
        <BaseButton type="submit">{{ buttonText }}</BaseButton>
      </form>
     
      <div class="text-center space-x-2 py-3">
        <span>{{ member.text }}</span>
        <router-link :to="member.route" class="text-blue-400 hover:underline">
          {{ member.LinkText }}
        </router-link>
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
import BaseButton from "@/components/FormInputs/Button.vue";
import CheckBox from "@/components/FormInputs/InputCheckbox.vue";
import imgTwo from "@/assets/imgTwo.png";
import imgOne from "@/assets/imgOne.png";
import PasswordInput from "@/components/FormInputs/PasswordInput.vue";
const buttonText = "Log In";
const member = {
  text: "Don't have an account?",
  LinkText: "Sign Up",
  route: "/register",
};
import { ref } from "vue";
import { useAuthStore} from "@/stores/auth";
const authStore  = useAuthStore();
import { useRouter } from "vue-router";
const router = useRouter();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  await authStore.login({
    email: email.value,
    password: password.value,
  });
  router.push("/home");
  email.value = "";
  password.value = "";
};
</script>

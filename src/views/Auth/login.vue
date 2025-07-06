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
        <h2 class="text-2xl font-bold mb-4 text-center">{{ title }}</h2>
        <div class="mb-4">
          <div class="flex items-center">
            <BaseInput
              class="w-full"
              name="email"
              type="email"
              @input-value="setInputValue"
              placeholder="Enter email"
            />
            <span class="py-7"
              ><font-awesome-icon :icon="['fas', 'envelope']"
            /></span>
          </div>
          <span class="text-red-500">{{ form.email.error }}</span>
        </div>
        <div class="mb-4">
          <div class="flex items-center">
            <PasswordInput @inputValue="setInputValue" name="password" placeholder="Enter password" />
          </div>
          <span class="text-red-500">{{ form.password.error }}</span>
        </div>
        <div class="py-4">
          <CheckBox label=" Remember me" />
        </div>
        <BaseButton :is-loading="isLoading" type="submit">{{ buttonText }}</BaseButton>
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
import { ref } from "vue";
import { useAuthStore} from "@/stores/auth";
const authStore  = useAuthStore();
import { useRouter } from "vue-router";
import useInteractiveInput from "@/hooks/interactive-input";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
import { loginRequest } from "@/dto/auth";

const authRepo = RepositoryFactory.get("auth");
const buttonText = "Log In";
const title = "Login";
const isLoading = ref(false);
const member = {
  text: "Don't have an account?",
  LinkText: "Sign Up",
  route: "/register",
};
const router = useRouter();

const form = ref(loginRequest)

const handleLogin = async () => {
  isLoading.value = true;
  try{
    const response = await authRepo.login({
      email: form.value.email,
      password: form.value.password
    });
    console.log(response);
    
  }catch(error){
    const errors = RepositoryFactory.handleApiError(error.response);
    setInputErrors(errors);
  }
  isLoading.value = false;
};
const { setInputValue, setInputErrors } = useInteractiveInput(form);
</script>

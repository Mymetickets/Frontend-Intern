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
        <form @submit.prevent="handleRegister">
          <h2 class="text-2xl font-bold mb-4 text-center">{{ title }}</h2>
          <div class="mb-4">
            <div class="flex items-center">
              <BaseInput
                class="w-full"
                @inputValue="setInputValue"
                name="name"
                type="name"
                placeholder="Full Name"
              />
              <span class=""
                ><font-awesome-icon :icon="['fas', 'user']"
              /></span>
            </div>
            <small class="text-red-500">{{ form.name.error }}</small>
          </div>
          <div class="mb-4">
            <div class="flex items-center">
              <BaseInput
                class="w-full"
                @inputValue="setInputValue"
                name="email"
                type="email"
                placeholder="Enter email"
              />
              <span class=""
                ><font-awesome-icon :icon="['fas', 'envelope']"
              /></span>
            </div>
            <small class="text-red-500">{{ form.email.error }}</small>
          </div>

          <div class="mb-4">
            <div class="flex items-center">
              <PasswordInput
                @inputValue="setInputValue"
                name="password"
                placeholder="Password"
              />
            </div>
            <small class="text-red-500">{{ form.password.error }}</small>
          </div>
          <div class="mb-4">
            <div class="flex items-center">
              <PasswordInput
                @inputValue="setInputValue"
                name="confirm_password"
                placeholder="Confirm password"
              />
            </div>
            <small class="text-red-500">{{ form.confirm_password.error }}</small>
          </div>
          <div class="py-4">
            <CheckBox :isRequired="true" label=" I agree to the terms of service" />
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
import CheckBox from "@/components/FormInputs/InputCheckbox.vue";
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
import { useRouter } from 'vue-router';
import useInteractiveInput from "@/hooks/interactive-input";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";
import PasswordInput from "@/components/FormInputs/PasswordInput.vue";
import { signupRequest } from "@/dto/auth";

const authRepo = RepositoryFactory.get("auth");
const title = "Create An Account";
const buttonText = "Register";
const member = {
  text: "Already a member?",
  LinkText: "Login",
  route: "/login",
};
const isLoading = ref(false);
const form = ref(signupRequest);
const {setInputValue, setInputErrors} = useInteractiveInput(form);
const handleRegister = async () => {
  console.log(form.value);
  try{
    isLoading.value = true;
    const response = await authRepo.signup(form.value);
  }catch(error){
    const errors = RepositoryFactory.handleApiError(error.response);
    if(errors)
      setInputErrors(errors);
  }
  isLoading.value = false;
};
</script>

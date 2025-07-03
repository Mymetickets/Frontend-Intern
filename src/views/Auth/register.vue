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
          <div class="flex items-center">
            <BaseInput
              class="w-full"
              v-model="form.name"
              name="name"
              type="name"
              placeholder="Full Name"
            />
            <span class="py-7"
              ><font-awesome-icon :icon="['fas', 'user']"
            /></span>
          </div>
          <div class="flex items-center">
            <BaseInput
              class="w-full"
              v-model="form.email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <span class="py-7"
              ><font-awesome-icon :icon="['fas', 'envelope']"
            /></span>
          </div>

          <div class="flex items-center">
            <BaseInput
              class="w-full"
              v-model="form.password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <span class="py-7"
              ><font-awesome-icon :icon="['fas', 'eye']" />
            </span>
          </div>
          <div class="flex items-center">
            <BaseInput
              class="w-full"
              v-model="form.password_confirmation"
              name="confirm"
              type="password"
              placeholder="Confirm password"
            />
            <span class="py-7"
              ><font-awesome-icon :icon="['fas', 'eye']"
            /></span>
          </div>
          <div class="py-4">
            <CheckBox v-model="form.agree" label=" I agree to the terms of service" />
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
const router = useRouter();


const title = "Create An Account";
const buttonText = "Register";
const member = {
  text: "Already a member?",
  LinkText: "Login",
  route: "/login",
};

const form = ref({
  name: '',
  email: '',
  password: '',
  password_confirmation:'',
  agree: false,
})
const handleRegister = async () => {
  
  if (form.value.password !== form.value.password_confirmation){
    alert("Passwords don't match!");
    return;
  }
  // if (!form.value.agree === checked) {
  //   alert("Please agree to the terms of service.");
  //   return;
  // }
  try {
    await authStore.handleRegister(form.value);
   router.push('/home'); 
  } catch (error) {
    console.error("Registration failed:", error);
    alert("Registration failed. Please try again.");
  }
};
</script>

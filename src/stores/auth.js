import  { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null
    }),
    
    actions: {
        setAuthUser(user){
            this.user = user;
            this.token = user.access_token;
            localStorage.setItem("auth_user", JSON.stringify(user));
            localStorage.setItem("auth_token", user.access_token);
        },
        loadAuthUser(){
            this.token = localStorage.getItem("auth_token");
            this.user = localStorage.getItem("auth_user");
        }
    },
});











    
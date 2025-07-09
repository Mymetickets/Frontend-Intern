import  { defineStore } from 'pinia'
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null
    }),
    
    actions: {
        setAuthUser(user, token){
            this.user = user;
            this.token = token;
            localStorage.setItem("auth_user", JSON.stringify(user));
            localStorage.setItem("auth_token", token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        },
        loadAuthUser(){
            this.token = localStorage.getItem("auth_token");
            const user = localStorage.getItem("auth_user");
            if(user)
                this.user = JSON.parse(user);
            if(this.token){
                axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`
            }
        },
        destroyAuthUser(){
            localStorage.setItem("auth_user", '');
            localStorage.setItem("auth_token", '');
            delete axios.defaults.headers.common['Authorization']
        }
    },
});











    
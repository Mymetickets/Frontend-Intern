import  { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: null,
        isAuthenticated: false,
    }),
    
    actions: {
        async handleLogin(credentials) {
        try {
            const response = await axios.post('https://products-crud-api-z2ng.onrender.com/api/login',
                 {
                email: credentials.email,
                password: credentials.password
            }
        );
            this.user = response.data.user;
            this.token = response.data.token;
            this.isAuthenticated = true;
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;
        } catch (error) {
            console.error('Login failed:', error);
        }
        },
        async handleRegister(userData) {
        try {
            const response = await axios.post('https://products-crud-api-z2ng.onrender.com/api/register', 
                
                {
                    
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                    password_confirmation: userData.password_confirmation
                },
                
                  
            );
            

            this.user = response.data.user;
            console.log('User registered:', this.user);
            this.token = response.data.token;
            this.isAuthenticated = true;
            axios.defaults.headers.common['Authorization'] = `Bearer ${this.token}`;

        } catch (error) {
            console.error('Registration failed:', error);
        }
        },
    },
    });











    
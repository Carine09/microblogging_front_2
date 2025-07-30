import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
      state: () => ({
    token: null,
    userId: null,
  }),

  getters: {
    isAuthenticated: (state) => state.token !== null,
  },

  actions: {
    setToken(token, userId = null) {
      this.token = token;
      this.userId = userId;

      if (token) {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
      } else {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
      }
    },
    
    logout() {
            fetch("http://localhost:8000/api/logout", {
                method: 'Post',
                headers: { Authorization: `Bearer ${this.token}` },
            })
                .then(response => response.json())
                .then(data =>
                    this.setToken(null)
                )
                .catch(error => {
                    console.log(error)
                })
        }
    }
});
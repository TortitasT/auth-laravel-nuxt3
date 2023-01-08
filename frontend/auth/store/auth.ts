// store/filters.js
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth-store",
  state: () => {
    return {
      user: null,
    } as {
      user: any;
    };
  },
  actions: {
    async updateUser() {
      try {
        const user = await Auth.user();
        this.user = user;
      } catch (error) {
        this.user = null;
      }
    },
  },
});

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
      const user = await auth.user();

      this.user = user.value;
    },

    test() {
      console.log("test");
    },
  },
});

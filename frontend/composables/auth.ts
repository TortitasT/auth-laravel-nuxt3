import { useAuthStore } from "@/store/auth";

export default class {
  public static async login(
    { email, password }: { email: string; password: string },
  ): Promise<unknown> {
    useFetch("http://localhost:8000/sanctum/csrf-cookie", {
      method: "GET",
      credentials: "include",
    });

    const response = await useFetch("http://localhost:8000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "X-XSRF-TOKEN": useCookie("XSRF-TOKEN").value || "",
      },
      body: { email, password },
    });

    if (response.error.value?.status === 401) {
      throw new Error("Invalid credentials");
    } else if (response.error.value) {
      throw new Error("Something went wrong");
    }

    useAuthStore().updateUser();

    return response;
  }

  public static async user(): Promise<any> {
    const { data } = await useFetch("http://localhost:8000/api/user", {
      method: "GET",
      credentials: "include",
    });

    return data;
  }

  public static async logout() {
    useFetch("http://localhost:8000/sanctum/csrf-cookie", {
      method: "GET",
      credentials: "include",
    });

    await useFetch("http://localhost:8000/logout", {
      method: "POST",
      credentials: "include",
      headers: {
        "X-XSRF-TOKEN": useCookie("XSRF-TOKEN").value || "",
      },
    });

    await useAuthStore().updateUser();

    return navigateTo("/login");
  }
}

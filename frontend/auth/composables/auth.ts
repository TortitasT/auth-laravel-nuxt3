import { useAuthStore } from "#imports";

// TODO: config
// const config = useRuntimeConfig();

// const csfrEndpoint = config.public.auth.endpoints.csfr;
// const loginEndpoint = config.public.auth.endpoints.login;
// const userEndpoint = config.public.auth.endpoints.user;
// const logoutEndpoint = config.public.auth.endpoints.logout;

export class Auth {
  public static async login(
    { email, password }: { email: string; password: string },
  ): Promise<unknown> {
    $fetch("http://localhost:8000/sanctum/csrf-cookie", {
      method: "GET",
      credentials: "include",
    });

    const response = await $fetch("http://localhost:8000/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "accept": "application/json",
        "X-XSRF-TOKEN": useCookie("XSRF-TOKEN").value || "",
      },
      body: { email, password },
    });

    // if (response.error.value?.status === 401) {
    //   throw new Error("Invalid credentials");
    // } else if (response.error.value) {
    //   throw new Error("Something went wrong");
    // }

    useAuthStore().updateUser();

    return response;
  }

  public static async user(): Promise<any> {
    let headers: any = {};

    if (process.server) {
      headers = useRequestHeaders(["cookie", "user-agent"]);
    }

    headers["accept"] = "application/json";
    headers["referer"] = "http://localhost:3000";

    const params = {
      method: "GET",
      credentials: "include",
      headers,
    } as any;

    const response = await $fetch(
      "http://localhost:8000/api/user",
      params,
    );

    return response;
  }

  public static async logout() {
    $fetch("http://localhost:8000/sanctum/csrf-cookie", {
      method: "GET",
      credentials: "include",
    });

    await $fetch("http://localhost:8000/logout", {
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

export const user = computed(() => {
  return useAuthStore().user;
})

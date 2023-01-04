import { useAuthStore } from "#imports";

// TODO: NOT WORKNG
const config = useRuntimeConfig();

const csfrEndpoint = config.public.auth.endpoints.csfr;
const loginEndpoint = config.public.auth.endpoints.login;
const userEndpoint = config.public.auth.endpoints.user;
const logoutEndpoint = config.public.auth.endpoints.logout;
export class Auth {
  public static async login(
    { email, password }: { email: string; password: string },
  ): Promise<unknown> {
    $fetch(csfrEndpoint.url, {
      method: csfrEndpoint.method,
      credentials: "include",
    });

    const response = await $fetch(loginEndpoint.url, {
      method: loginEndpoint.method,
      credentials: "include",
      headers: {
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
    headers["referer"] = config.public.auth.referer;

    const params = {
      method: userEndpoint.method,
      credentials: "include",
      headers,
    } as any;

    const response = await $fetch(
      userEndpoint.url,
      params,
    );

    return response;
  }

  public static async logout() {
    $fetch(csfrEndpoint.url, {
      method: csfrEndpoint.method,
      credentials: "include",
    });

    await $fetch(logoutEndpoint.url, {
      method: logoutEndpoint.method,
      credentials: "include",
      headers: {
        "X-XSRF-TOKEN": useCookie("XSRF-TOKEN").value || "",
      },
    });

    await useAuthStore().updateUser();

    return navigateTo("/login");
  }
}

export const loggedIn = computed(() => {
  return useAuthStore().user !== null;
})

export const user = computed(() => {
  return useAuthStore().user;
})

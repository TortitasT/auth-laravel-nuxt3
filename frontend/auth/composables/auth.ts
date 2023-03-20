import { useAuthStore } from "#imports";

export const useAuth = () => {
  const config = useRuntimeConfig();

  const csfrEndpoint = config.public.auth.endpoints.csfr;
  const csfrEndpointUrl = config.public.auth.baseURL + csfrEndpoint.url;

  const loginEndpoint = config.public.auth.endpoints.login;
  const loginEndpointUrl = config.public.auth.baseURL + loginEndpoint.url;

  const userEndpoint = config.public.auth.endpoints.user;
  const userEndpointUrl = config.public.auth.baseURL + userEndpoint.url;

  const logoutEndpoint = config.public.auth.endpoints.logout;
  const logoutEndpointUrl = config.public.auth.baseURL + logoutEndpoint.url;

  const refererUrl = config.public.auth.referer;

  const store = useAuthStore();

  return {
    login: async (
      { email, password }: { email: string; password: string },
    ): Promise<unknown> => {
      $fetch(csfrEndpointUrl, {
        method: "GET",
        credentials: "include",
      });

      const response = await $fetch(loginEndpointUrl, {
        method: "POST",
        credentials: "include",
        headers: {
          "accept": "application/json",
          "X-XSRF-TOKEN": useCookie("XSRF-TOKEN").value || "",
        },
        body: { email, password },
      });

      store.updateUser();

      return response;
    },

    user: async (): Promise<any> => {
      let headers: any = {};

      if (process.server) {
        headers = useRequestHeaders(["cookie", "user-agent"]);
      }

      headers["accept"] = "application/json";
      headers["referer"] = refererUrl;

      const params = {
        method: "GET",
        credentials: "include",
        headers,
      } as any;

      const response = await $fetch(
        userEndpointUrl,
        params,
      );

      return response;
    },

    logout: async () => {
      $fetch(csfrEndpointUrl, {
        method: "GET",
        credentials: "include",
      });

      await $fetch(logoutEndpointUrl, {
        method: "POST",
        credentials: "include",
        headers: {
          "X-XSRF-TOKEN": useCookie("XSRF-TOKEN").value || "",
        },
      });

      await store.updateUser();

      return navigateTo("/login");
    }
  }
}
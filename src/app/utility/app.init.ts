import { KeycloakService } from "keycloak-angular";

export function initilizeKeycloak(
  keycloak: KeycloakService
): () => Promise<boolean> {
  return () =>
    keycloak.init({
      config: {
        url: "https://localhost:8080-auth",
        realm: "MoveAppRealm",
        clientId: "MoveApp",
      },
      initOptions: {
        checkLoginIframe: true,
        checkLoginIframeInterval: 25,
      },
    });
}

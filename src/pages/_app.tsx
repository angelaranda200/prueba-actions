

import "@/styles/globals.css";
import { IncomingMessage } from "http";
import type { AppContext, AppProps } from "next/app";

import cookie from "cookie";

import { ReactKeycloakProvider } from "@react-keycloak/web";
import { CookiesProvider } from "react-cookie";
import keycloak from "keycloak-js";


const keycloakCfg = {
  url: "http://localhost:8080/",
  realm: "react-realm",
  clientId: "react-login-client",
  onLoad: "login-required",
};



const App = ({ Component, pageProps }: AppProps ) => {
  

  //@ts-ignore
  let client: Keycloak;
  if (typeof document !== "undefined") {
    client = new keycloak(keycloakCfg);
  }


  
  return (
    <ReactKeycloakProvider
      initOptions={{
        onLoad: "login-required",
      }}
      authClient={client}
    >
      <Component {...pageProps} />
    </ReactKeycloakProvider>
  );
  
};

export default App;



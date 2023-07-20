import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "keycloak-js";

const keycloakCfg = {
  url: "http://localhost:8080/",
  realm: "react-realm",
  clientId: "react-login-client",
  onLoad: "login-required",
};

const App = ({ Component, pageProps }: AppProps  ) => {

  //@ts-ignore
  let client: Keycloak;
  if (typeof document !== "undefined") {
    client = new keycloak(keycloakCfg);
  }

  const onKeycloakEvent = (event:any, error:any) => {
    console.log('onKeycloakEvent', event, error)
  }

  const onKeycloakTokens = (tokens:any) => {
    console.log('onKeycloakTokens', tokens)
  }
  

  return (
    <ReactKeycloakProvider
      initOptions={{
        onLoad: "login-required",
      }}
      authClient={client}
      onEvent={onKeycloakEvent}
      onTokens={onKeycloakTokens}
      autoRefreshToken={true}

    >
      {/* <SessionProvider session={sesion}> */}

        <Component {...pageProps} />
      {/* </SessionProvider> */}
    </ReactKeycloakProvider>
  );
  
};


export default App;

// export async function getServerSideProps(context:any) {

//   const sesion = session({
//     secret: 'pruebas',
//     resave: false,
//     saveUninitialized: true,
//     store: store,
//   });

//   return {
//     props: sesion, // will be passed to the page component as props
//   }
// }


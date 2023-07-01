import { useKeycloak } from "@react-keycloak/ssr";
import keycloak from "keycloak-js";
import Link from "next/link";
import { FC } from "react";

export const Header: FC = () => {
  const { keycloak } = useKeycloak<keycloak>();

  return (
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm ">
      <Link href="/" className="my-0 mr-md-auto font-weight-bold text-dark">
        Next.js + Keycloak
      </Link>
      
        <Link href="/profile" className="p-2 text-dark">
          Profile
        </Link>
      
      {keycloak?.authenticated ? (
        <main>
          <button
            type="button"
            className="mx-2 btn btn-outline-primary"
            onClick={() => {
              if (keycloak) {
                window.location.href = keycloak.createAccountUrl();
              }
            }}
          >
            My Account
          </button>

          <button
            type="button"
            className="mx-2 btn btn-outline-danger"
            onClick={() => {
              if (keycloak) {
                window.location.href = keycloak.createLogoutUrl();
              }
            }}
          >
            Logout
          </button>
        </main>
      ) : (
        <main>
          <button
            type="button"
            className="mx-2 btn btn-outline-primary"
            onClick={() => {
              if (keycloak) {
                window.location.href = keycloak.createRegisterUrl();
              }
            }}
          >
            Signup
          </button>

          <button
            type="button"
            className="mx-2 btn btn-outline-success"
            onClick={() => {
              if (keycloak) {
                window.location.href = keycloak.createLoginUrl();
              }
            }}
          >
            Login
          </button>
        </main>
      )}
    </header>
  );
};

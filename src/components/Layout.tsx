"use client"
import Head from 'next/head'

import { Footer } from './Footer'
import { Header } from './Header'
import { FC } from 'react'
import Link from 'next/link'
import { useKeycloak } from '@react-keycloak/ssr'
import keycloak from "keycloak-js";


type Props = {
  children:any,
  title?: string
}

export const Layout: FC<Props> = ({children,title = 'Next.js + Keycloak Example'}) => {

  const { keycloak } = useKeycloak<keycloak>();

  return (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
    </Head>

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
    <main className="container my-5">{children}</main>
    <footer className="footer">
      <hr />
      <div className="container">
        
          Repo:&nbsp;
          <Link className="text-muted" href="https://github.com/react-keycloak/react-keycloak">
            https://github.com/react-keycloak/react-keycloak
          </Link>
        
      </div>
    </footer>
  </>
  )
}
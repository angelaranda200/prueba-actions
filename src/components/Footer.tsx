import Link from "next/link"
import { FC } from "react"


export const Footer: FC = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="container">
        
          Repo:&nbsp;
          <Link className="text-muted" href="https://github.com/react-keycloak/react-keycloak">
            https://github.com/react-keycloak/react-keycloak
          </Link>
        
      </div>
    </footer>
  )
}
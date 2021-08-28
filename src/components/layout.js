import * as React from "react"
import Footer from "./footer"
import AppNavbar from "./AppNavbar"
import { Container } from "react-bootstrap"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <AppNavbar />
      <Container className="layout-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Container>
    </>
  )
}

export default Layout

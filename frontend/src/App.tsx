import { Container, Nav, Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="d-flex flex-column vh-100">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Autodily</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/kosik" className="nav-link">
              Kosik
            </a>
            <a href="/prihlaseni" className="nav-link">
              Přihlásit se
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">
          <a href="/kontakt" className="nav-link">
            kontakt
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App

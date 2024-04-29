import { Container, Nav, Navbar } from 'react-bootstrap'
import { sampleProducts } from './data'

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
        <ul>
          {sampleProducts.map((product) => (
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.nazev}
                className="product-image"
              ></img>
              <h2>{product.nazev}</h2>
              <p>{product.popis}</p>
              <p>{product.cena} Kč</p>
            </li>
          ))}
        </ul>
      </main>
      <footer></footer>
    </div>
  )
}

export default App

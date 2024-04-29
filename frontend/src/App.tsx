import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { vzorekProduktu } from './data'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <header>Autodily</header>
      <main>
        <ul>
          {vzorekProduktu.map((product) => (
            <li key={product.slug}>
              <img
                src={product.image}
                alt={product.nazev}
                className="product-image'"
              ></img>
              <h2>{product.nazev}</h2>
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

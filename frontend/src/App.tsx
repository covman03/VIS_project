import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { sampleProducts } from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header></header>
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
            </li>
          ))}
        </ul>
      </main>
      <footer></footer>
    </div>
  )
}

export default App

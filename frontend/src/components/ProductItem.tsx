import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Product } from '../types/products'
import Rating from './Rating'

function ProductItem({ product }: { product: Product }) {
  return (
    <Card>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} className="card-img-top" alt={product.nazev} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product.slug}`}>
          <Card.Title>{product.nazev}</Card.Title>
        </Link>
        <Rating rating={product.rating} numReviews={product.numReviews} />
        <Card.Text>${product.cena}</Card.Text>
        {product.pocetKusu === 0 ? (
          <Button variant="light" disabled>
            Vyprodáno
          </Button>
        ) : (
          <Button>Přidat do košíku</Button>
        )}
      </Card.Body>
    </Card>
  )
}

export default ProductItem

import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../data'
import { Link } from 'react-router-dom'

export default function homepage() {
  return (
    <Row>
      {sampleProducts.map((product) => (
        <Col key={product.slug} sm={6} md={4} lg={3}>
          <Link to={'/product/' + product.slug}>
            <img
              src={product.image}
              alt={product.nazev}
              className="product-image"
            ></img>
            <h2>{product.nazev}</h2>

            <p>{product.cena} Kč</p>
          </Link>
        </Col>
      ))}
    </Row>
  )
}

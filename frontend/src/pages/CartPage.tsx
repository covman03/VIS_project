import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Store } from '../Store'
import { CartItem } from '../types/Cart'
import { toast } from 'react-toastify'
import { Helmet } from 'react-helmet-async'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import MessageBox from '../components/MessageBox'

export default function CartPage() {
  const navigate = useNavigate()

  const {
    state: {
      mode,
      cart: { cartItems },
    },
    dispatch,
  } = useContext(Store)

  const updateCartHandler = (item: CartItem, quantity: number) => {
    if (item.pocetKusu < quantity) {
      toast.warn('Produkt je vyprodaný')
      return
    }
    dispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...item, quantity },
    })
  }
  const checkoutHandler = () => {
    navigate('/prihlaseni?redirect=/doprava')
  }

  const removeItemHandler = (item: CartItem) => {
    dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
  }
  return (
    <div>
      <Helmet>
        <title>Košík</title>
      </Helmet>
      <h1>Košík</h1>
      <Row>
        <Col md={8}>
          {cartItems.length === 0 ? (
            <MessageBox>
              košík je prázdný <Link to="/">Jít nakupovat</Link>
            </MessageBox>
          ) : (
            <ListGroup>
              {cartItems.map((item: CartItem) => (
                <ListGroup.Item key={item._id}>
                  <Row className="Align-items-center">
                    <Col md={4}>
                      <img
                        src={item.image}
                        alt={item.nazev}
                        className="img-fluid rounded thumbnail"
                      ></img>{' '}
                      <Link to={`/product/${item.slug}`}>{item.nazev}</Link>
                    </Col>
                    <Col md={3}>
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantity - 1)
                        }
                        variant={mode}
                        disabled={item.quantity === 1}
                      >
                        <i className="fas fa-minus-circle"></i>
                      </Button>{' '}
                      <span>{item.quantity}</span>
                      <Button
                        onClick={() =>
                          updateCartHandler(item, item.quantity + 1)
                        }
                        disabled={item.quantity === item.pocetKusu}
                        variant={mode}
                      >
                        <i className="fas fa-plus-circle"></i>
                      </Button>{' '}
                    </Col>
                    <Col md={3}>{item.cena} Kč</Col>
                    <Col md={2}>
                      <Button
                        onClick={() => removeItemHandler(item)}
                        variant={mode}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>
                    Mezisoučet ({cartItems.reduce((a, c) => a + c.quantity, 0)}{' '}
                    Ks):{' '}
                    {cartItems.reduce((a, c) => a + c.cena * c.quantity, 0)} Kč
                  </h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      onClick={checkoutHandler}
                      disabled={cartItems.length === 0}
                    >
                      pokračovat k plabě
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

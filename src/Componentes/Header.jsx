import React from 'react'
import { Container, Form, Nav, Navbar} from 'react-bootstrap'




const Header = ({setValorDeLaCaja }) => {


 

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand >Buscador de colaboradores</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar un colaborador"
            className="me-2"
            aria-label="Search"

            onChange={(e) => setValorDeLaCaja(e.target.value)}
          />
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header
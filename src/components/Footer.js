import { Container, Row,Col } from "react-bootstrap"
export const Footer = () => {
    return(
          <footer className="bg-dark text-light mt-5 py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>Rutas del Sabor</h5>
              <p className="mb-0">Descubrí los mejores lugares para comer</p>
            </Col>

            <Col md={6} className="text-md-end mt-3">
              <p className="mb-0">2026 — Taller Frontend</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}
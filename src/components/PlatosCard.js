import { Card , Badge, Col, Button } from "react-bootstrap"

export default function PlatosCard({plato}) {
  return (
   <Col key={plato.id} xs={12} sm={6} md={4}>
                  <Card className="h-100">
                    <div style={{ aspectRatio: "16 / 9", overflow: "hidden" }}>
                      <Card.Img
                        variant="top"
                        src={plato.imagen}
                        alt={plato.nombre}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="mb-2">{plato.nombre}</Card.Title>

                      <Card.Text className="text-muted mb-3">
                        {plato.localNombre}
                      </Card.Text>

                      <div className="mt-auto mb-2 d-flex align-items-center justify-content-between">
                        <Badge bg="success">${plato.precio}</Badge>
                        <span className="text-muted" style={{ fontSize: 13 }}>
                          Plato
                        </span>
                      </div>

                      <Button onClick={() => console.log("Test")}>
                        Ver detalles
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
  )
}

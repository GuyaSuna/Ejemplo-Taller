import { Card, Badge, Col } from "react-bootstrap";

export const ListadoLocales = ({ local }) => {
  return (
    <Col key={local.id} xs={12} sm={6} md={4}>
      <Card className="h-100" key={local.id}>
        <div style={{ aspectRatio: "16 / 9", overflow: "hidden" }}>
          <Card.Img
            variant="top"
            src={local.imagen}
            alt={local.nombre}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <Card.Body className="d-flex flex-column">
          <Card.Title className="mb-2">{local.nombre}</Card.Title>

          <Card.Text className="text-muted mb-3">
            {local.tipo} — {local.ubicacion}
          </Card.Text>

          <div className="mt-auto">
            <Badge bg="secondary">{local.tipo}</Badge>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

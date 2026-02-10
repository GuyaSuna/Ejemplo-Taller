import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Alert,
  Button,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Header } from "../components/Header";
import LocalesCard from "../components/LocalesCard";
import PlatosCard from "../components/PlatosCard";
import { Footer } from "../components/Footer";

function App() {
  const [locales, setLocales] = useState([
    {
      id: 1,
      nombre: "Bar Sur",
      tipo: "Bar",
      ubicacion: "Colonia",
      imagen: "https://picsum.photos/seed/bar/800/600",
    },
    {
      id: 2,
      nombre: "Café Centro",
      tipo: "Cafetería",
      ubicacion: "Montevideo",
      imagen: "https://picsum.photos/seed/cafe/800/600",
    },
    {
      id: 3,
      nombre: "Food Truck Plaza",
      tipo: "Food Truck",
      ubicacion: "Canelones",
      imagen: "https://picsum.photos/seed/foodtruck/800/600",
    },
    {
      id: 4,
      nombre: "Pizzería La Esquina",
      tipo: "Restaurante",
      ubicacion: "San José",
      imagen: "https://picsum.photos/seed/pizza/800/600",
    },
  ]);

  const [platos, setPlatos] = useState([
    {
      id: 1,
      nombre: "Milanesa",
      precio: 450,
      localNombre: "Bar Sur",
      imagen: "https://picsum.photos/seed/milanesa/800/600",
    },
    {
      id: 2,
      nombre: "Capuccino",
      precio: 220,
      localNombre: "Café Centro",
      imagen: "https://picsum.photos/seed/capu/800/600",
    },
    {
      id: 3,
      nombre: "Hamburguesa completa con cheddar y panceta",
      precio: 520,
      localNombre: "Food Truck Plaza",
      imagen: "https://picsum.photos/seed/burger/800/600",
    },
    {
      id: 4,
      nombre: "Pizza muzzarella",
      precio: 600,
      localNombre: "Pizzería La Esquina",
      imagen: "https://picsum.photos/seed/pizzaplate/800/600",
    },
  ]);


  return (
    <>
      <Container className="my-4">
             {/* Header Section */}
       <Header />
        <Card className="mb-4 mt-3">
          <Card.Body>
            <Card.Title as="h1"> Listado Taller</Card.Title>
          </Card.Body>
        </Card>

           {/* Listado Locales Section */}
        <Card className="mb-4">
          <Card.Header className="d-flex align-items-center justify-content-between">
            <span>Locales</span>
            <Badge bg="secondary">{locales.length}</Badge>
          </Card.Header>

          <Card.Body>
            {locales.length === 0 && (
              <Alert variant="warning" className="mb-0">
                No hay locales para mostrar
              </Alert>
            )}

            <Row className="g-3">
              {locales.map((local) => (
               <LocalesCard local={local}/>
              ))}
            </Row>
          </Card.Body>
        </Card>

             {/* Listado Platos Section */}
        <Card>
          <Card.Header className="d-flex align-items-center justify-content-between">
            <span>Platos</span>
            <Badge bg="success">{platos.length}</Badge>
          </Card.Header>

          <Card.Body>
            {platos.length === 0 && (
              <Alert variant="warning" className="mb-0">
                No hay platos para mostrar
              </Alert>
            )}

            <Row className="g-3">
              {platos.map((plato) => (
                <PlatosCard plato={plato} />
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>

      {/* Footer Section */}
    <Footer/>
    </>
  );
}

export default App;

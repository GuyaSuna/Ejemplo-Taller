import { useState } from "react";
import { Card, Button } from "react-bootstrap";

export const ProductoCard = () => {
    const [nombre , setNombre] = useState("Milanesa");
    const [precio , setPrecio] = useState(0);
    const [stock , setstock] = useState(10);
    const [enOferta , setEnOferta] = useState(true);
    const [cantidadSeleccionada , setCantidadSeleccionada] = useState(1);
    const [mensaje , setMensaje] = useState("");

    const handleChangeCantidad = () =>{
        if(stock > 0){
            setstock(stock -1);
            setMensaje("");
        }else{
            setMensaje("No hay stock disponible");
        }
    }

    return (
         <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
         {precio}
        </Card.Text>
        <Card.Text>
         {stock}
        </Card.Text>
         <Card.Text>
         {stock > 0 ? <p>Producto disponible</p> : <p>Producto no disponible</p>}
        </Card.Text>
        <Card.Text>
         {enOferta && <p>Producto en oferta</p>}
        </Card.Text>
        <Card.Text>
         {cantidadSeleccionada}
        </Card.Text>
        <Card.Text>
         {mensaje}
        </Card.Text>
        <Button variant="primary" onClick={handleChangeCantidad}>Restar Stock</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
    );
}
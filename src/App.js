import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


import "./App.css";

function App() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");


  const personas = [
    { id: 1, nombre: "Martín", edad: 15 },
    { id: 2, nombre: "Sofía", edad: 22 },
    { id: 3, nombre: "Andrés", edad: 24 },
  ];

  const clases = [
    {id: 1 , cantidadSillas: 25},
    {id: 2 , cantidadSillas: 30},
    {id: 3 , cantidadSillas: 20}
  ]

  const claseSillasPar = clases.find((clase) => clase.cantidadSillas % 2 === 0 ); 

  const clasesSillasPar = clases.filter((clase) => clase.cantidadSillas % 2 === 0);






  const numeroPar = personas.find((per) => per.edad % 2 === 0);

  const edadesFiltradas = personas.filter((per) => per.edad % 2 === 0);

  const edadesTotal = personas.reduce((suma, item) => suma + item.edad, 0);








const numeros = [1,2,3]

const suma = numeros.reduce((suma , item) => suma + item , 0);

const dobles2 = numeros.map((num) => num * 2 );












  const dobles = personas.map((per) => (
    <p key={per.id}>
      !Hola {per.nombre} , tu edad es de: {per.edad}.
    </p>
  ));

  console.log(dobles);



  const testTaller = (nombre = "Invitado") => console.log(nombre) 





  const manejarLogin = () => {
    if (usuario === "" || password === "") {
      setMensaje("Tenés que completar todos los campos");
    } else {
      setMensaje("Presionaste el botón de login");
    }
  };

  return (
    <>
      <div className="contenedor">
        <Card className="text-center">
          <Card.Header>Login Muestra Taller</Card.Header>
          <Card.Body>
            <input
              type="text"
              placeholder="Usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="input"
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
            <Button variant="primary" onClick={manejarLogin}>
              Login
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">{mensaje}</Card.Footer>
        </Card>
      </div> 






      {dobles2}

        <br></br>



      {claseSillasPar.cantidadSillas}


      <br></br>


        {clasesSillasPar.map((clase) => <div>
          <h1> {clase.id} </h1>
          <h2> {clase.cantidadSillas}  </h2>
        </div>)}

  <br></br>

{suma}





    </>
  );
}

export default App;

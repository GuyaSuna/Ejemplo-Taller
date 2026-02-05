import {useState , useEffect }from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {getAllLocales} from "./api/locales/api";
import "./App.css";


function App() {

  const [locales , setLocales] = useState([]);

  const [password, setPassword] = useState("");

  const [mensaje, setMensaje] = useState("");

  const [numero , setNumero] = useState(10);

  const [objPersona , setObjPersona] = useState({id: 1,
    nombre : "Nahuel"
  });

  const [arrPersonas , setArrPersonas] = useState([{id: 1,
                                        nombre : "Nahuel"
                                      },
                                      {id: 2,
                                        nombre : "Pedro"
                                      }
                                    ]);

  const [usuario, setUsuario] = useState("");

  const [orden , setOrden] = useState(true);

  const fetchLocales = async() => {
    const data = await getAllLocales("","","","","","");
    console.log("FRONT: ",data);
    setLocales(data);
  }

useEffect(() => {
fetchLocales();
},[])


 useEffect(() => {
  if(orden){
    console.log("Menor a Mayor")
  }else{
    console.log("Mayor a Menor")
  }

 } ,[orden])
 


 

  const manejarLogin = () => {

    if(orden){
      setOrden(false);
    }else{
      setOrden(true)
    }

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

    </>
  );
}

export default App;

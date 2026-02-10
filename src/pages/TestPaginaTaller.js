import { Header } from "../components/Header";
import { useState } from "react";
export const TestPaginaTaller = () =>{

    const [nombre , setNombre] = useState("Nahuel");

    const autos = [{id:1 , marca: "Fiat" , precio: 4500 },
        {id:2 , marca: "Peugeot" , precio: 6000 },
        {id:3 , marca: "Tesla" , precio: 45000 }
    ]

    const testFuncion = (nombre , apellido, edad, numeroCelular) => {

    }
    testFuncion("Nahuel", "Gonzalez", 24, 123456789);

    const cambiarNumero = () =>{

    } 


    return(
    <>
    <Header nombre={nombre}  >  <p>Ejemplo de children</p>    </Header> 

    {autos.map((auto) => <CardAutos key={auto.id} auto={auto} />)}


    <Footer />
    </>
    );
}


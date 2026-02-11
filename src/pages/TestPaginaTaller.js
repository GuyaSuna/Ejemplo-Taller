import { useState } from "react";
import ListadoTest from "../components/ListadoTest";
import { Footer } from "../components/Footer";
import Header from "../components/Header";

export const TestPaginaTaller = () =>{
    const [nombre , setNombre] = useState("Nahuel");
    
    const listadoAlumnos = [
        {
            nombre: "Nahuel",
            apellido: "Pages"
        },
        {
            nombre: "Alfredo",
            apellido: "Pages"
        },
        {
            nombre: "Pedrito",
            apellido: "Pages"
        }
    ]

    return(
    <>
    <Header nombre={nombre}/>

    <ListadoTest nombre={nombre} apellido="Pages"/>
    <ListadoTest nombre="Alfredo" apellido="Pages"/>
    <ListadoTest nombre="Pedrito" apellido="Pages"/>


    {listadoAlumnos.map((alumno) =>  <Footer alumno={alumno}/> )}


    </>

    );
}


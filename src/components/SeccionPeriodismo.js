import { useState } from "react";

const SeccionPeriodismo = () => {

    const [nombre , setNombre] = useState("Nahuel");
    const [numero , setNumero] = useState(0);



    console.log(nombre);



    const alumnos = [
        {id : 1,
        nombre : "Carla",
        edad : 15
        },
        {
         id : 2,
         nombre : "Nahuel",
         edad : 24   
        },
        {
        id: 3,
        nombre : "Gonzalo",
        edad : 26
        }
    ]


const numeros = [1,2,3,4];



    const nombres = alumnos.map((alumno) => alumno.nombre);

    const alumna = alumnos.find((alumno) => alumno.nombre === "Carla");

    const alumnosEdadPar = alumnos.filter((alumno) => alumno.edad % 2 === 0);

    const totalNumeros = numeros.reduce((suma , numeroActual) => suma + numeroActual  ,0) 

    const totalEdades = alumnos.reduce((suma , alumno) => suma + alumno.edad ,0);





const pruebaTaller = (nombre = "Invitado") => console.log(nombre);




return(
    <div>
    <h1>Componente Muestra Datos</h1>
    <p>Nombres: {nombres}</p>
    <p>Alumna: {alumna.nombre}</p>
    <div>Alumnos con edad par: {alumnosEdadPar.map((alumno) =>
        <div key={alumno.id}>
        <h1>Alumno nro:{alumno.id}</h1>
        <p> {alumno.nombre} </p>
        </div>
    )}</div>
    <p>Total de números: {totalNumeros}</p>
    <p>Total de edades: {totalEdades}</p>
    </div>
)



}

export default SeccionPeriodismo;
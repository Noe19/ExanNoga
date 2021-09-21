import {useEffect, useState} from "react";

const Consejos = ()=>{

    const [Almacenar,setalamcenar]=useState(null);



    useEffect(()=>{
        const getdata =async ()=>{

            const obtenerDatos = await fetch(

                "https://api.adviceslip.com/advice"

            )
            const todo_datos = await obtenerDatos.json();
            setalamcenar(todo_datos);/* aaqui vva dondee se alamcena*/
            console.log(todo_datos)

        }
        getdata();

    },[])











    return(

        <div className="Consejo1">
            <h1>Tus consejos</h1>
            <div className="consejo1"> <strong>consejo :</strong>{Almacenar&& Almacenar.slip.advice}

            </div>





        </div>





    )

}
export default Consejos;
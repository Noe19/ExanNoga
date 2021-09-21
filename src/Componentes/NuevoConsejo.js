import {useEffect, useState} from "react";
import { Button } from 'antd';
import '../Styles/App.css';

const NuevoConsejo = ()=>{




    const [Almacenar1,setalamcenar1]=useState(null);
    const [ completed, setCompleted ] = useState( [] );

    const getdata =async ()=>{

        const obtenerDatos = await fetch(

            "https://api.adviceslip.com/advice"
            //`api.adviceslip.com/advice/${Consejo}`

        )
        const todo_datos = await obtenerDatos.json();
        setalamcenar1(todo_datos.slip);/* aaqui vva dondee se alamcena*/


    }
    const handleliminar = (index)=> {
        ;
        /*
        setCompleted ((prevState)=>{
            return prevState.filter ((index1) =>index1.id !=index.id)
        })

    }*/
        setCompleted(() => [
            ...completed.filter((index1) => index1.id != index.id)
        ]);
    }

    const handlelAlmacenar = (index)=>{

        setCompleted( (  ) => [
            ... completed ,index

        ] );


    }


    useEffect(()=>{
        console.log("datos favoritos",completed);
    },[completed])

    useEffect(()=>{

        getdata();

    },[])




    return(

        <div>


            <div className="Todoelproyecto">


                <h1>Consejo del dia  </h1>
                <div className="consejo_nuevo_generar">

                <div className="cONSEJO_NUEVO"> <strong>consejo Nuevo :</strong>{Almacenar1&& Almacenar1.advice}


                </div>

                </div>

                <button onClick={ ()=>  handlelAlmacenar(Almacenar1) }>Marcar como favorito</button>
                <button onClick={getdata}>Siguiente Consejos</button>
                <div className="cadaCosejo">



                </div>

                <h2> Consejos Favoritos</h2>

                {

                    completed&& completed.map((favotitos)=>(
                        <tr key={ favotitos.id}>
                            <td>{favotitos.advice}</td>
                            <td><button onClick={ ()=>  handleliminar(favotitos) }>Quitar de la lista</button></td>


                        </tr>

                    ))
                }
                <div>




            </div>


            </div>



        </div>



    )






}
export default NuevoConsejo;
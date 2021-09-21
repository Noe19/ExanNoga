import {useEffect, useState} from "react";
import { Alert } from 'antd';

import { Input } from 'antd';
import { Row, Col, Divider } from 'antd';

const { TextArea } = Input;

const onChange = e => {
    console.log(e);
};
const Search =()=>{
    const [ completed, setCompleted ] = useState( [] );
    const [AlmaConsejo,setconseejo]=useState(null);
    const [Buscar,SetBuscar]=useState("love");
    useEffect(()=>{
        console.log("datos almacenads",AlmaConsejo);
    },[AlmaConsejo])

    useEffect(()=>{
        console.log("peliculas buscadas",AlmaConsejo);
    },[AlmaConsejo])
    useEffect(()=>{


        const GetData = async ()=>{

          const obetner = await fetch(
                `https://api.adviceslip.com/advice/search/${Buscar}`

            );
            const datosobtenidos = await  obetner.json();
            console.log("datos pelcas",datosobtenidos.slips);
            setconseejo(datosobtenidos.slips);


        };
        GetData();

    },[Buscar]);

    const handleAddMio =()=>{
        const  palabra= document.querySelector("#InputBuscar").value;
        SetBuscar(palabra);
        console.log("la palabra buscada",palabra);

    }


    const handlelAlmacenar = (index)=>{

     /*  setCompleted(() => [
            ...completed.filter((index1) => index1.id == index.id)
        ]);
        console.log("index",index)
*/
        const repetidos =  completed.filter((index1) => index1.id == index.id)
        if(!repetidos){
            setCompleted(()=>[...completed,index]);
            return   <Alert
                message="Error"
                description="This is an error message about copywriting."
                type="error"
                showIcon
            />
        }




    }

    return (





        <div className="buscar">
            <h1>Tus mejores consejos </h1>

            <div className="buscar">
                <label htmlFor="buscar" > </label>
                <Input type="text" id="InputBuscar"/>
                <button onClick={handleAddMio}>Buscar</button>
            </div>


<div className="listabusqueda">
            <h4>Resultado de Busqueda</h4>
</div>
        <div className="Contenido_lista">
            {
                AlmaConsejo ===null ? <div>cargando consejos</div> :  AlmaConsejo&&  AlmaConsejo.map((buscar)=>(
          <tr key={ buscar.id}>
              <td>{buscar.advice}</td>
              <button onClick={ ()=>  handlelAlmacenar(buscar) }>Marcar como favorito</button>
              {

              }

                    </tr>

                ))

            }

</div>


        </div>

    );





}
export default Search;

import { useEffect, useMemo, useState } from 'react'
import { Dropdown } from "@nextui-org/react";
import { useStateContext } from '../contexts/ContextProvider';

export const InputSelect = ({tipo, handleChange}) => {

    const [data, setData] = useState(null);
    const [selected, setSelected] = useState(new Set([`Selecciona un ${tipo}`]));

    const {
        allPeriodos,
        allDocentes,
        getData
     } = useStateContext();

     useEffect(() => {
        if(tipo==='Docente'){
            getData(`selectAllDocentes`)
        }else{
            getData(`selectAllPeriodos`)
        }
        // getData(`selectAll${tipo}s`)
        // eslint-disable-next-line
     }, [])

     useEffect(() => {
        if (allDocentes !== null && tipo==='Docente') {
           setData(allDocentes);
        }
     }, [allDocentes])
  
     useEffect(() => {
        if (allPeriodos !== null && tipo==='Periodo') {
           setData(allPeriodos);
        }
     }, [allPeriodos])

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  return (
    <Dropdown>
      <Dropdown.Button value={selectedValue} name={tipo==='Docente'?'idDocente': 'idPeriodo'} flat color="primary" css={{ tt: "capitalize" }} onFocus={(e)=>handleChange(e)}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="primary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {data===null?
        <Dropdown.Item key="0">Sin datos</Dropdown.Item>
        :
        data.map((el,index)=>(
            <Dropdown.Item 
            key={tipo==='Docente'?el.idDocente: el.idPeriodo}
            >
                {tipo==='Docente' ? el.nombreCompleto : el.periodo}
            </Dropdown.Item>
        ))
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

import { useEffect, useMemo, useState } from 'react'
import { Dropdown } from "@nextui-org/react";
import { useStateContext } from '../contexts/ContextProvider';

export const InputSelect = ({ tipo, handleChange }) => {

  const [data, setData] = useState(null);
  const [selected, setSelected] = useState(new Set([`${tipo === "Alumno" ? "" : `Selecciona un ${tipo}`}`]));



  const {
    allPeriodos,
    allDocentes,
    allMaterias,
    allAlumnos,
    getData
  } = useStateContext();

  useEffect(() => {

    switch (tipo) {
      case 'Docente':
        getData(`selectAllDocentes`)
        break;

      case 'Periodo':
        getData(`selectAllPeriodos`)
        break;

      case 'Materia':
        getData(`selectAllMaterias`)
        break;

      case 'Alumno':
        getData(`selectAllAlumnos`)
        break;
      default:
        console.log("Error: Unknown");
        break;
    }
    // if(tipo==='Docente'){
    //     getData(`selectAllDocentes`)
    // }else{
    //     getData(`selectAllPeriodos`)
    // }
    // getData(`selectAll${tipo}s`)
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (allDocentes !== null && tipo === 'Docente') {
      setData(allDocentes);
    }
  }, [allDocentes])

  useEffect(() => {
    if (allPeriodos !== null && tipo === 'Periodo') {
      setData(allPeriodos);
    }
  }, [allPeriodos])

  useEffect(() => {
    if (allMaterias !== null && tipo === 'Materia') {
      setData(allMaterias);
    }
  }, [allMaterias])

  useEffect(() => {
    if (allAlumnos !== null && tipo === 'Alumno') {
      setData(allAlumnos);
    }
  }, [allAlumnos])

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const getName = {
    Docente: "idDocente",
    Periodo: "idPeriodo",
    Materia: "idMateria",
    Alumno: "alumnos",
    //tipo === 'Docente' ? 'idDocente' : tipo === 'Periodo' ? 'idPeriodo' : 'idMateria'
  }
  return (
    <Dropdown>
      <Dropdown.Button value={selectedValue} name={getName[tipo]} flat color="primary" css={{ tt: "capitalize" }} onFocus={(e) => handleChange(e)}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="primary"
        disallowEmptySelection
        selectionMode={tipo === "Alumno" ? "multiple" : "single"}
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {data === null ?
          <Dropdown.Item key="0">Sin datos</Dropdown.Item>
          :
          data.map((el, index) => (
            <Dropdown.Item
              key={tipo === 'Docente' ? el.idDocente : tipo === 'Periodo' ? el.idPeriodo : tipo === 'Materia' ? el.idMateria : el.idAlumno}
            >
              {tipo === 'Docente' ? el.nombreCompleto : tipo === 'Periodo' ? el.periodo : tipo === 'Materia' ? el.nombre : el.nombreCompleto}
            </Dropdown.Item>
          ))
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar2 } from "../components/Sidebar2";
import { useStateContext } from '../contexts/ContextProvider';

import '../styles/HomeDocentePage.css'
import '../styles/StylesComponents/Table.css'

import { Spacer, Card, Row, Text } from "@nextui-org/react";
import { Table } from "../components/table/Table";
import { MyModal } from "../components/Modal";
import { useTitle } from "../hooks/useTitle";
import { InfoUsuario } from "../components/InfoUsuario";

export const HomeAlumnoPage = () => {

   const [user, setUser] = useState('Calificaciones');

   const handleUser = (u) => {
      if (u === "Generar Boleta") {
        // Abrir archivo PDF
        window.open('https://drive.google.com/file/d/1Jq-rPNYLmPhp-nDJEJjoi1neGUz_9fIM/view?usp=sharing', '_blank');
      } else {
        setUser(u);
      }
    }
    
    

   useTitle('Alumno');

   const [oneMateria, setOneMateria] = useState(null);
   const [materiasAlumno, setMateriasAlumno] = useState(null);
   const [currentAlumno, setCurrentAlumno] = useState(null);
   const [notasVer, setNotasVer] = useState(null);

   //Modal
   const [visibleModel, setVisibleModal] = useState(false);
   const [tipoModal, setTipoModal] = useState('');
   const [titleModal, setTitleModal] = useState('calificacion');

   const [dataToEdit, setDataToEdit] = useState(null);

   const {
      nameUser,
      alumno,
      notasMateriaAlumno,
      getOneData,
      alumnoMaterias,
      authUser,
      updateData
   } = useStateContext();


   useEffect(() => {
      getOneData('selectAlumno', 'nombre', nameUser);
      // eslint-disable-next-line
   }, [])

   useEffect(() => {
      if (alumno !== null) {
         setCurrentAlumno(alumno[0]);
         console.log(alumno[0]);
      }
   }, [alumno])

   useEffect(() => {
      if (currentAlumno !== null) {
         getOneData('selectMateriaID', 'id', currentAlumno.idAlumno);
      }
      // eslint-disable-next-line
   }, [currentAlumno])

   useEffect(() => {
      if (alumnoMaterias !== null) {
         setMateriasAlumno(alumnoMaterias);
      }
   }, [alumnoMaterias])

   // const handleChange = (e) => {
   //    if (e.target.value === '') {
   //       setNotasVer(null);
   //    } else {
   //       let dato = e.target.value;
   //       dato.includes(' ') && (dato = dato.replace(/\s+/g, '%20'));
   //       // console.log('materia a buscar: ', dato);
   //       getOneData('selectMateria', 'nombre', dato);
   //    }
   // };

   useEffect(() => {
      if (materiasAlumno !== null) {
         setOneMateria(materiasAlumno[0]);
      }
   }, [materiasAlumno])

   useEffect(() => {
      if (oneMateria !== null) {
         getOneData('selectNotaAlumnoMateria', 'id', currentAlumno.idAlumno);
      }
      // eslint-disable-next-line
   }, [oneMateria])

   useEffect(() => {
      if (notasMateriaAlumno !== null) {
         setNotasVer(notasMateriaAlumno);
      }
   }, [notasMateriaAlumno])

   // if (notasCalificar !== null) {
   //    console.log(notasCalificar);
   // }

   const handleOpenModal = (tipo, title, data) => {
      console.log(data);
      if (data !== null) {
         setDataToEdit(data);
      } else {
         setDataToEdit(null);
      }
      setTipoModal(tipo);
      setTitleModal(title);
      setVisibleModal(true);
   }

   const handleModify = (data) => {
      console.log(data);
      updateData('alumnos', data);
      updateData('UsuariosUsuario', data);
      handleClose();

      // setDataToEdit(data);
      // setTipoModal('Modificar');
      // setTitleModal('usuario');
      // setIsAddUser(false);
      // setActive(false);
      // setActive(true);
   }

   const handleAdd = (data) => {
      setDataToEdit(null);
      console.log('Agregar un usuario', data);
      handleClose();
      // setTipoModal('Agregar');
      // setVisibleModal(true);
   }

   const handleClose = () => {
      setDataToEdit(null);
      setVisibleModal(false);
      // console.log("closed");
   };

   const handleDelete = () => {
      console.log('Eliminar un usuario');
      handleClose();

      // setTipoModal('Eliminar');
      // setVisibleModal(true);
   }

   return (
      <>

         {authUser === 'false' ? <Navigate to='/welcome' /> : (
            <>
               <Header nameUser={nameUser} />
               <Sidebar2 handleUser={handleUser} user={user} />

               <MyModal
                  visibleModal={visibleModel}
                  handleClose={handleClose}
                  handleAdd={handleAdd}
                  handleModify={handleModify}
                  handleDelete={handleDelete}
                  data={dataToEdit}
                  title={titleModal}
                  tipo={tipoModal}
               />

               <Card css={{ $$cardColor: '#131d62', m: '1rem 0' }} variant="bordered" className='main'>
                  <Card.Body>

                     <Row justify="center" align="center">
                        <Text h3 color="white" css={{ m: 0 }} >
                           {user === 'Calificaciones' && 'Ver calificaciones'}
                           {user === 'Perfil' && 'Informacion'}
                           
                           
                           
                        </Text>
                     </Row>

                     <Spacer y={1} />

                     {/* <Text h3 color="white" css={{ m: 0 }} >
                        Selecciona la materia
                     </Text>
                     <select style={{ color: '#000' }} defaultValue={''} name='materias' id="" onChange={handleChange}>
                        <option value="" >Selecionar...</option>
                        {materiasDocente !== null && materiasDocente.map((el) => (
                           <option value={el.nombre} key={el.idMateria}>{el.nombre} </option>
                        ))}
                     </select> */}

                     {user === 'Perfil' ?
                        <InfoUsuario nombre={currentAlumno.nombreCompleto} handleModify={handleModify} />
                        :

                        <Row justify="center" align="center">
                           <Table
                              title='calificaciones'
                              handleOpenModal={handleOpenModal}
                              eventoModify={handleModify}
                              eventoDelete={handleDelete}
                              data={notasVer}
                           />
                        </Row>
                     }

                  </Card.Body>
               </Card>
            </>
         )}
      </>
   )
}

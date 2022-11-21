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

export const HomeDocentePage = () => {
   useTitle('Docente');

   const [oneMateria, setOneMateria] = useState(null);
   const [materiasDocente, setMateriasDocente] = useState(null);
   const [currentDocente, setCurrentDocente] = useState(null);
   const [notasCalificar, setNotasCalificar] = useState(null);

   //Modal
   const [visibleModel, setVisibleModal] = useState(false);
   const [tipoModal, setTipoModal] = useState('');
   const [titleModal, setTitleModal] = useState('calificacion');

   const [dataToEdit, setDataToEdit] = useState(null);

   const { nameUser, docente, materia, notasMateriaDocente, getOneData, docenteMaterias, authUser } = useStateContext();


   useEffect(() => {
      getOneData('selectDocente', 'nombre', nameUser);
      // eslint-disable-next-line
   }, [])

   useEffect(() => {
      if (docente !== null) {
         setCurrentDocente(docente[0]);
      }
   }, [docente])

   useEffect(() => {
      if (currentDocente !== null) {
         getOneData('selectMateriaDocente', 'id', currentDocente.idDocente);
      }
      // eslint-disable-next-line
   }, [currentDocente])

   useEffect(() => {
      if (docenteMaterias !== null) {
         setMateriasDocente(docenteMaterias);
      }
   }, [docenteMaterias])

   const handleChange = (e) => {
      if (e.target.value === '') {
         setNotasCalificar(null);
      } else {
         let dato = e.target.value;
         dato.includes(' ') && (dato = dato.replace(/\s+/g, '%20'));
         // console.log('materia a buscar: ', dato);
         getOneData('selectMateria', 'nombre', dato);
      }
   };

   useEffect(() => {
      if (materia !== null) {
         setOneMateria(materia[0]);
      }
   }, [materia])

   useEffect(() => {
      if (oneMateria !== null) {
         getOneData('selectNotaDocenteMateria', 'id', oneMateria.idMateria);
      }
      // eslint-disable-next-line
   }, [oneMateria])

   useEffect(() => {
      if (notasMateriaDocente !== null) {
         setNotasCalificar(notasMateriaDocente);
      }
   }, [notasMateriaDocente])

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
               <Sidebar2 />

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

               <Card css={{ $$cardColor: '#0072f560', m: '1rem 0' }} variant="bordered" className='main'>
                  <Card.Body>

                     <Row justify="center" align="center">
                        <Text h3 color="white" css={{ m: 0 }} >
                           Capturar calificaciones
                        </Text>
                     </Row>

                     <Spacer y={1} />

                     <Text h3 color="white" css={{ m: 0 }} >
                        Selecciona la materia
                     </Text>
                     <select style={{ color: '#000' }} defaultValue={''} name='materias' id="" onChange={handleChange}>
                        <option value="" >Selecionar...</option>
                        {materiasDocente !== null && materiasDocente.map((el) => (
                           <option value={el.nombre} key={el.idMateria}>{el.nombre} </option>
                        ))}
                     </select>

                     <Spacer y={1} />

                     <Row justify="center" align="center">
                        <Table
                           title='calificacion'
                           handleOpenModal={handleOpenModal}
                           eventoModify={handleModify}
                           eventoDelete={handleDelete}
                           data={notasCalificar}
                        />
                     </Row>
                  </Card.Body>
               </Card>
            </>
         )}
      </>
   )
}

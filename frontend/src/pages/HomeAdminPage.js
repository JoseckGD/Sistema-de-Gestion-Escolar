import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar2 } from "../components/Sidebar2";
import { useStateContext } from '../contexts/ContextProvider';

import '../styles/HomeDocentePage.css'
import '../styles/StylesComponents/Table.css'

import { AiOutlineUserAdd } from "react-icons/ai";

import { Card, Row, Text, Tooltip, Button } from "@nextui-org/react";
import { Table } from "../components/table/Table";
import { MyModal } from "../components/Modal";
import { useTitle } from "../hooks/useTitle";
import { dataFormAlumnoAdd, dataFormDocenteAdd, dataFormUserAdd } from "../data/DataFormsModal";

let rol = '';

export const HomeAdminPage = () => {
   const [user, setUser] = useState('Usuarios');

   useTitle('Adiministrativo');

   const [visibleModel, setVisibleModal] = useState(false);
   const [tipoModal, setTipoModal] = useState('');
   const [titleModal, setTitleModal] = useState('usuario');

   const [alumnos, setAlumnos] = useState(null);
   const [docentes, setDocentes] = useState(null);
   const [periodos, setPeriodos] = useState(null);
   const [materias, setMaterias] = useState(null);

   const [dataToEdit, setDataToEdit] = useState(null);

   const { nameUser,
      allAlumnos,
      allPeriodos,
      allUsuarios,
      allMaterias,
      getData,
      allDocentes,
      createData,
      updateData,
      deleteData,
      authUser,
   } = useStateContext();

   useEffect(() => {
      getData('selectAllUsuarios')
      // eslint-disable-next-line
   }, [])

   useEffect(() => {
      if (allUsuarios !== null) {
         setAlumnos(allUsuarios);
      }
   }, [allUsuarios])

   useEffect(() => {
      if (allDocentes !== null) {
         setDocentes(allDocentes);
      }
   }, [allDocentes])

   useEffect(() => {
      if (allAlumnos !== null) {
         setAlumnos(allAlumnos);
      }
   }, [allAlumnos])

   useEffect(() => {
      if (allPeriodos !== null) {
         setPeriodos(allPeriodos);
      }
   }, [allPeriodos])


   useEffect(() => {
      if (allMaterias !== null) {
         setMaterias(allMaterias);
      }
   }, [allMaterias])

   const handleOpenModal = (tipo, title, data) => {
      // console.log('data: ', data);
      // console.log(`tipo= ${tipo}, tittlr= ${title},  \ndata: ${data}`);
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
      updateData(user, data);
      handleClose();
   }

   const handleAdd = (data) => {
      // console.log(data);
      // console.log(`Agregar un registro en ${user}`, data);
      switch (user) {
         case 'Usuarios':
            if (Object.prototype.hasOwnProperty.call(data, 'idAlumno') || Object.prototype.hasOwnProperty.call(data, 'idDocente')) {
               console.log(`${rol}s agregado`);
               createData(`${rol}s`, data);
               handleClose();

            } else {
               if (data && Object.prototype.hasOwnProperty.call(data, 'tipoUsuario')) {
                  rol = data.tipoUsuario.toLowerCase();
               }
               // console.log('agregar un alumno');
               // console.log('rol: ', rol);
               handleOpenModal('Agregar', `${rol}s`, (data.tipoUsuario === 'Alumno' ? { ...dataFormAlumnoAdd, 'nombreCompleto': `${data.nombre}` } : { ...dataFormDocenteAdd, 'nombreCompleto': `${data.nombre}` }))
               createData(user, data);
            }
            break;

         case 'Docentes':
            createData('Usuarios', ({
               ...dataFormUserAdd,
               'nombre': `${data.nombreCompleto}`,
               'usuario': `${data.nombreCompleto}`,
               'contrasena': `${data.nombreCompleto}`,
               'tipoUsuario': `Docente`,
               'id': null
            }))
            createData(user, data);
            handleClose();
            break;

         case 'Alumnos':
            createData('Usuarios', ({
               ...dataFormUserAdd,
               'nombre': `${data.nombreCompleto}`,
               'usuario': `${data.nombreCompleto}`,
               'contrasena': `${data.nombreCompleto}`,
               'tipoUsuario': `Alumno`,
               'id': null
            }))
            createData(user, data);
            handleClose();
            break;

         case 'Periodos':
            createData(user, data);
            handleClose();
            break;

         case 'Materias':
            console.log(data);
            createData(user, data);
            handleClose();
            break;

         default:
            break;
      }
      // if (user === 'Usuarios') {
      //    if (Object.prototype.hasOwnProperty.call(data, 'idAlumno') || Object.prototype.hasOwnProperty.call(data, 'idDocente')) {
      //       console.log(`${rol}s agregado`);
      //       createData(`${rol}s`, data);
      //       handleClose();

      //    } else {
      //       if (data && Object.prototype.hasOwnProperty.call(data, 'tipoUsuario')) {
      //          rol = data.tipoUsuario.toLowerCase();
      //       }
      //       // console.log('agregar un alumno');
      //       // console.log('rol: ', rol);
      //       handleOpenModal('Agregar', `${rol}s`, (data.tipoUsuario === 'Alumno' ? { ...dataFormAlumnoAdd, 'nombreCompleto': `${data.nombre}` } : { ...dataFormDocenteAdd, 'nombreCompleto': `${data.nombre}` }))
      //       createData(user, data);
      //    }
      //    // handleOpenModal('Agregar', `${data.tipoUsuario.toLowerCase()}s`, (data.tipoUsuario === 'Alumno' ? { ...dataFormAlumnoAdd, 'nombreCompleto': `${data.nombre}` } : { ...dataFormDocenteAdd, 'nombreCompleto': `${data.nombre}` }))
      //    // createData(user, data);
      //    // console.log(data.tipoUsuario);
      // } else {
      // createData(user, data);
      // setDataToEdit(null);
      // handleClose();
      // }
   }

   const handleClose = () => {
      setDataToEdit(null);
      setVisibleModal(false);
      // console.log("closed");
   };

   const handleDelete = (data) => {
      console.log('Eliminar un usuario');
      console.log(data);
      deleteData('Usuarios', data.idUsuario);
      handleClose();

      // setTipoModal('Eliminar');
      // setVisibleModal(true);
   }

   const handleUser = (u) => {
      setUser(u);
      getData(`selectAll${u}`);
   }

   const getDataTOShow = () => {
      switch (user) {
         case 'Usuarios':
            return allUsuarios;

         case 'Periodos':
            return periodos;

         case 'Materias':
            return materias;

         case 'Docentes':
            return docentes;

         case 'Alumnos':
            return alumnos;
         default:
            return null;
      }
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

               <Card css={{ $$cardColor: '#0072f560', m: '1rem 0' }} variant="bordered" className='main'>
                  <Card.Body>

                     <Row justify="space-between" align="center">
                        <Text h3 color="white" css={{ m: 0 }} >
                           {user}
                        </Text>
                        <Tooltip content={`Agregar un ${user}`}>
                           <Button
                              shadow
                              color="primary"
                              auto
                              icon={<AiOutlineUserAdd />}
                              onPress={() => handleOpenModal('Agregar', `${user.toLowerCase()}`, null)}
                           />
                        </Tooltip>
                     </Row>


                     <Row justify="center" align="center">
                        <Table
                           title={user.toLowerCase() === 'materias' ? 'Tabla de materias' : user.toLowerCase()}
                           handleOpenModal={handleOpenModal}
                           eventoModify={handleModify}
                           eventoDelete={handleDelete}
                           // data={user === 'Usuarios' ? allUsuarios :
                           //    (user === 'Periodos' ? periodos :
                           //       (user === 'Materias' ? materias :
                           //          (user === 'Docentes' ? docentes :
                           //             (user === 'Alumnos') && alumnos)))}
                           data={getDataTOShow()}
                        />
                     </Row>
                  </Card.Body>
               </Card>
            </>
         )}
      </>
   )
}

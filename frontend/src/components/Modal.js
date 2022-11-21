import { Modal, Button, Text, Input, Row } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { initialFormAlumnoAdd, initialFormAlumnoModify, initialFormCalificacionModify, initialFormDocenteAdd, initialFormDocenteModify, initialFormMateriaAdd, initialFormMateriaModify, initialFormPeriodoAdd, initialFormPeriodoModify, initialFormUserAdd, initialFormUserModify, labelFormAlumnoAdd, labelFormAlumnoModify, labelFormCalificacionModify, labelFormDocenteAdd, labelFormDocenteModify, labelFormMateriaAdd, labelFormMateriaModify, labelFormPeriodoAdd, labelFormPeriodoModify, labelFormUserAdd, labelFormUserModify } from "../data/DataFormsModal";
// import { dataTables } from '../data/DataTables.js'

export const MyModal = ({ visibleModal, handleAdd, handleClose, handleModify, handleDelete, data, title, tipo }) => {

   // const [form, setForm] = useState(
   //    title === 'usuarios' ? (data === null ? initialFormUserAdd : initialFormUserModify) :
   //       (title === 'calificacion' && initialFormCalificacionModify)
   // );

   const handleChange = (e) => {
      // console.log(e.target.name, e.target.value)
      setForm({
         ...form,
         [e.target.name]: e.target.value,
      });
   };

   useEffect(() => {
      setForm(null);
   }, [handleClose])

   useEffect(() => {
      if (tipo === 'Modificar') {
         setForm(data)
      } else {
         setForm(getInitialForm())
      }
   }, [visibleModal])

   //Obtener los valores de los label para los formularios
   const getLabel = () => {
      switch (title) {
         case 'usuarios':
            return (tipo === 'Agregar' ? labelFormUserAdd : labelFormUserModify);

         case 'calificacion':
            return labelFormCalificacionModify;

         case 'periodos':
            return (tipo === 'Agregar' ? labelFormPeriodoAdd : labelFormPeriodoModify);

         case 'materias':
            return (tipo === 'Agregar' ? labelFormMateriaAdd : labelFormMateriaModify);

         case 'docentes':
            return (tipo === 'Agregar' ? labelFormDocenteAdd : labelFormDocenteModify);

         case 'alumnos':
            return (tipo === 'Agregar' ? labelFormAlumnoAdd : labelFormAlumnoModify);

         default: return null;
      }
   }

   //Obtener los valores para guardar datos de los formularios
   const getInitialForm = () => {
      // console.log(title);
      switch (title) {
         case 'usuarios':
            return (tipo === 'Agregar' ? initialFormUserAdd : initialFormUserModify);

         case 'calificacion':
            return initialFormCalificacionModify;

         case 'periodos':
            return (tipo === 'Agregar' ? initialFormPeriodoAdd : initialFormPeriodoModify);

         case 'materias':
            return (tipo === 'Agregar' ? initialFormMateriaAdd : initialFormMateriaModify);

         case 'docentes':
            return (tipo === 'Agregar' ? initialFormDocenteAdd : initialFormDocenteModify);

         case 'alumnos':
            return (tipo === 'Agregar' ? initialFormAlumnoAdd : initialFormAlumnoModify);

         default: return null;
            break;
      }
   }
   // console.log(form);
   // dataTables.map((item, index) => (
   //    item.titleTable.includes(title) && (indexT = index)
   // ));

   const [form, setForm] = useState(getInitialForm());

   return (
      <div>
         <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visibleModal}
            onClose={handleClose}
         >
            <Modal.Header>
               <Text id="modal-title" size={24}>
                  {title === 'usuarios' && (tipo === 'Agregar' ? 'Agregar un ' : `${tipo} el ${title}`)}
                  {title === 'calificacion' && (tipo === 'Modificar' && `Modificar la ${title} de `)}
                  {title === 'periodos' && (tipo === 'Agregar' ? 'Aregar un ' : `Modificar el ${title} `)}
                  {title === 'materias' && (tipo === 'Agregar' ? 'Aregar una ' : `Modificar la ${title} `)}
                  {title === 'alumnos' && (tipo === 'Agregar' ? 'Aregar un ' : `Modificar un ${title} `)}
                  {title === 'docentes' && (tipo === 'Agregar' ? 'Aregar un ' : `Modificar un ${title} `)}
                  <Text b size={24}>
                     {title === 'usuarios' && (tipo === 'Agregar' ? 'usuario' : ` ${data ? data.usuario : 'a'}`)}
                     {title === 'calificacion' && (tipo === 'Modificar' && `${data && data.nombreCompleto}`)}
                     {title === 'periodos' && (tipo === 'Agregar' ? 'periodos' : ` ${data ? data.periodo : 'a'}`)}
                     {title === 'materias' && (tipo === 'Agregar' ? 'materia' : ` ${data ? data.nombre : 'a'}`)}
                     {title === 'alumnos' && (tipo === 'Agregar' ? 'alumno' : ` ${data ? data.nombreCompleto : 'a'}`)}
                     {title === 'docentes' && (tipo === 'Agregar' ? 'docente' : ` ${data ? data.nombreCompleto : 'a'}`)}
                  </Text>
               </Text>
            </Modal.Header>

            <Modal.Body>

               {data !== null ? (
                  <>
                     {tipo === 'Modificar' && (

                        Object.keys(getInitialForm()).map((campo, index) => (
                           // Object.keys(title === 'usuarios' ? initialFormUserModify : initialFormCalificacionModify).map((campo, index) => (
                           index === 0 ? (

                              <Input
                                 label={Object.keys(getLabel())[index]}
                                 // label={Object.keys(title === 'usuarios' ? labelFormUserModify : labelFormCalificacionModify)[index]}
                                 name={campo}
                                 value={form !== null && Object.values(form)[index]}
                                 //onChange={(e) => handleChange(e)}
                                 key={index}
                                 disabled
                                 status="success"
                                 fullWidth
                                 color="primary"
                                 size="md"
                                 // placeholder={Object.values(title === 'usuarios' ? labelFormUserModify : labelFormCalificacionModify)[index]}
                                 placeholder={Object.values(getLabel())[index]}
                              />
                           ) : (

                              <Input
                                 label={Object.keys(getLabel())[index]}
                                 // label={Object.keys(title === 'usuarios' ? labelFormUserModify : labelFormCalificacionModify)[index]}
                                 name={campo}
                                 value={form !== null && Object.values(form)[index]}
                                 // value={Object.values(form)[index]}
                                 onChange={(e) => handleChange(e)}
                                 key={index}
                                 clearable
                                 status="success"
                                 fullWidth
                                 color="primary"
                                 size="md"
                                 placeholder={Object.values(getLabel())[index]}
                              // placeholder={Object.values(title === 'usuarios' ? labelFormUserModify : labelFormCalificacionModify)[index]}
                              />
                           )
                        )))}

                     {tipo === 'Eliminar' && (
                        <Row justify="center" align="center">
                           <Text size={18}>
                              ¿Estas seguro de eliminar el usuario
                              <Text b size={18} color="error">
                                 {` ${data ? data.usuario : 'a'} `}
                              </Text>
                              ?
                           </Text>
                        </Row>
                     )}

                     {tipo === 'Agregar' && (
                        Object.keys(getInitialForm()).map((campo, index) => (
                           // Object.keys(initialFormUserAdd).map((campo, index) => (Object.keys(object1).length
                           index < Object.keys(getInitialForm()).length - 1 &&
                           // index < 5 &&
                           <Input
                              type={title === 'periodos' ? (index > 0 ? 'date' : 'text') : 'text'}
                              label={Object.keys(getLabel())[index]}
                              initialValue={data !== null && Object.values(data)[index]}
                              // label={Object.keys(labelFormUserAdd)[index]}
                              name={campo}
                              // value={Object.values(form)[index] || ''}
                              onChange={(e) => handleChange(e)}
                              key={index}
                              clearable
                              status="primary"
                              // bordered
                              fullWidth
                              color="primary"
                              size="md"
                              placeholder={Object.values(getLabel())[index]}
                           // placeholder={Object.values(labelFormUserAdd)[index]}
                           />
                        )))}
                  </>
               ) : (
                  tipo === 'Agregar' && (
                     Object.keys(getInitialForm()).map((campo, index) => (
                        // Object.keys(initialFormUserAdd).map((campo, index) => (Object.keys(object1).length
                        index < Object.keys(getInitialForm()).length - 1 &&
                        // index < 5 &&
                        <Input
                           type={title === 'periodos' ? (index > 0 ? 'date' : 'text') : 'text'}
                           label={Object.keys(getLabel())[index]}
                           // label={Object.keys(labelFormUserAdd)[index]}
                           name={campo}
                           // value={Object.values(form)[index] || ''}
                           onChange={(e) => handleChange(e)}
                           key={index}
                           clearable
                           status="primary"
                           // bordered
                           fullWidth
                           color="primary"
                           size="md"
                           placeholder={Object.values(getLabel())[index]}
                        // placeholder={Object.values(labelFormUserAdd)[index]}
                        />
                     )))
               )
               }
            </Modal.Body>

            <Modal.Footer>
               {tipo === 'Agregar' && (
                  <>
                     <Button auto flat color="error" onPress={handleClose}>
                        Cancelar
                     </Button>
                     <Button auto onPress={() => handleAdd(form)}>
                        Agregar
                     </Button>
                  </>
               )}

               {tipo === 'Modificar' && (
                  <>
                     <Button auto flat color="error" onPress={handleClose}>
                        Cancelar
                     </Button>
                     <Button auto onPress={() => handleModify(data)}>
                        Modifcar
                     </Button>
                  </>
               )}

               {tipo === 'Eliminar' && (
                  <>
                     <Button auto flat color="primary" onPress={handleClose}>
                        Cancelar
                     </Button>
                     <Button auto color="error" onPress={() => handleDelete(data)}>
                        Si, estoy seguro
                     </Button>
                  </>
               )}
            </Modal.Footer>

         </Modal>
      </div>
   );
}

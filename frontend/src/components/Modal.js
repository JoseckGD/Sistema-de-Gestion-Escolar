import { Modal, Button, Text, Input, Row, } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { initialFormAlumnoAdd, initialFormAlumnoModify, initialFormCalificacionModify, initialFormDocenteAdd, initialFormDocenteModify, initialFormGrupoAdd, initialFormGrupoModify, initialFormMateriaAdd, initialFormMateriaModify, initialFormPeriodoAdd, initialFormPeriodoModify, initialFormUserAdd, initialFormUserModify, labelFormAlumnoAdd, labelFormAlumnoModify, labelFormCalificacionModify, labelFormDocenteAdd, labelFormDocenteModify, labelFormGrupoAdd, labelFormGrupoModify, labelFormMateriaAdd, labelFormMateriaModify, labelFormPeriodoAdd, labelFormPeriodoModify, labelFormUserAdd, labelFormUserModify, typeInputForm_AlumnoAdd, typeInputForm_DocenteAdd, typeInputForm_UserAdd } from "../data/DataFormsModal";
import { InputSelect } from "./InputSelect";
let isValidateEmail = true;
export const MyModal = ({ visibleModal, handleAdd, handleClose, handleModify, handleDelete, data, title, tipo }) => {

   const validateForm = () => {
      // console.log(form);
      let isValidate = true;
      // console.log(form);
      Object.values(form).map((input) => (
         input !== null &&
         (input.length === 0 || /^\s+$/.test(input)) && (isValidate = false)
      ))

      if (!isValidate) {
         alert('Datos incompletos')
      } else {


         if (!isValidateEmail) {
            alert('Correo no valido')
            return false;
         }
      }


      return isValidate;
   }

   const validateEmail = (value) => {
      return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
   };

   const handleChange = (e) => {
      // console.log(e.target.name, e.target.value)
      let valueString = e.target.value;
      if (e.target.name === 'correo') {
         isValidateEmail = validateEmail(e.target.value)
      }

      if (valueString.charAt(0) === ',') {
         valueString = valueString.substring(1);
      }

      setForm({
         ...form,
         [e.target.name]: valueString,
      });
   };

   // useEffect(() => {
   //    setForm(null);
   // }, [handleClose])

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

         case 'grupos':
            return (tipo === 'Agregar' ? labelFormGrupoAdd : labelFormGrupoModify);

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

         case 'grupos':
            return (tipo === 'Agregar' ? initialFormGrupoAdd : initialFormGrupoModify);

         default: return null;
      }
   }

   const getTypeInputForm = () => {
      // console.log(title);
      switch (title) {
         case 'usuarios':
            return tipo === 'Agregar' ? typeInputForm_UserAdd : 'text';

         case 'docentes':
            return typeInputForm_DocenteAdd;

         case 'alumnos':
            return typeInputForm_AlumnoAdd;

         default: return 'password';
      }
   }

   const [form, setForm] = useState(getInitialForm());

   useEffect(() => {
      if (tipo === 'Agregar' && data) {
         setForm(data)
         console.log(data);

      } else {
         setForm(getInitialForm());
      }
   }, [data])


   useEffect(() => {
      if (tipo === 'Modificar') {
         console.log(data);
         setForm(data)
      } else {
         if (tipo === 'Agregar' && !data) {
            setForm(getInitialForm())
         } else {
            setForm(getInitialForm())
         }
      }
      // eslint-disable-next-line
   }, [visibleModal])

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
                  {title === 'grupos' && (tipo === 'Agregar' ? 'Aregar un ' : `Modificar el ${title} `)}
                  <Text b size={24}>
                     {title === 'usuarios' && (tipo === 'Agregar' ? 'usuario' : ` ${data ? data.usuario : 'a'}`)}
                     {title === 'calificacion' && (tipo === 'Modificar' && `${data && data.nombreCompleto}`)}
                     {title === 'periodos' && (tipo === 'Agregar' ? 'periodos' : ` ${data ? data.periodo : 'a'}`)}
                     {title === 'materias' && (tipo === 'Agregar' ? 'materia' : ` ${data ? data.nombre : 'a'}`)}
                     {title === 'alumnos' && (tipo === 'Agregar' ? 'alumno' : ` ${data ? data.nombreCompleto : 'a'}`)}
                     {title === 'docentes' && (tipo === 'Agregar' ? 'docente' : ` ${data ? data.nombreCompleto : 'a'}`)}
                     {title === 'grupos' && (tipo === 'Agregar' ? 'grupo' : ` ${data ? data.idGrupo : 'a'}`)}
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

                           index < Object.keys(getInitialForm()).length - 1 &&

                           <Input
                              type={title === 'periodos' ? (index > 0 ? 'date' : 'text') : getTypeInputForm()[index]}
                              label={Object.keys(getLabel())[index]}
                              name={campo}
                              value={data !== null && Object.values(data)[index]}
                              onChange={(e) => handleChange(e)}
                              key={index}
                              clearable
                              status="primary"
                              color="primary"
                              fullWidth
                              size="md"
                              placeholder={Object.values(getLabel())[index]}
                           />
                        )))}
                  </>
               ) : (
                  tipo === 'Agregar' && (
                     title === 'materias' ? (
                        <>
                           <Input
                              type={'text'}
                              label={Object.keys(getLabel())[0]}
                              // label={Object.keys(labelFormUserAdd)[index]}
                              name={'nombre'}
                              value={form && form.nombre}
                              onChange={(e) => handleChange(e)}
                              key={0}
                              clearable
                              status="primary"
                              fullWidth
                              color="primary"
                              size="md"
                              placeholder={Object.values(getLabel())[0]}
                           />
                           <Text h6 color="primary">Asignar un docente</Text>
                           <InputSelect tipo='Docente' handleChange={handleChange} />
                           <Text h6 color="primary">Asignar un periodo</Text>
                           <InputSelect tipo='Periodo' handleChange={handleChange} />
                        </>
                     ) :
                        title === 'grupos' ? (
                           <>
                              <Text h6 color="primary">Asignar un docente</Text>
                              <InputSelect tipo='Docente' handleChange={handleChange} />
                              <Text h6 color="primary">Asignar una materia</Text>
                              <InputSelect tipo='Materia' handleChange={handleChange} />
                              <Text h6 color="primary">Asignar un periodo</Text>
                              <InputSelect tipo='Periodo' handleChange={handleChange} />
                              <Text h6 color="primary">Asignar alumnos</Text>
                              <InputSelect tipo='Alumno' handleChange={handleChange} />
                              {/* <Input
                                 type={'text'}
                                 label={Object.keys(getLabel())[3]}
                                 // label={Object.keys(labelFormUserAdd)[index]}
                                 name={'nombre'}
                                 value={form && form.alumnos}
                                 onChange={(e) => handleChange(e)}
                                 key={0}
                                 clearable
                                 status="primary"
                                 fullWidth
                                 color="primary"
                                 size="md"
                                 placeholder={Object.values(getLabel())[3]}
                              /> */}
                           </>
                        ) :
                           (Object.keys(getInitialForm()).map((campo, index) => (
                              // Object.keys(initialFormUserAdd).map((campo, index) => (Object.keys(object1).length
                              index < Object.keys(getInitialForm()).length - 1 &&
                              // index < 5 &&
                              <Input
                                 type={title === 'periodos' ? (index > 0 ? 'date' : 'text') : getTypeInputForm()[index]}
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

               )
               }
            </Modal.Body>

            <Modal.Footer>
               {tipo === 'Agregar' && (
                  <>
                     <Button auto flat color="error" onPress={handleClose}>
                        Cancelar
                     </Button>
                     <Button auto onPress={() => validateForm() && handleAdd(form)}>
                        Agregar
                     </Button>
                  </>
               )}

               {tipo === 'Modificar' && (
                  <>
                     <Button auto flat color="error" onPress={handleClose}>
                        Cancelar
                     </Button>
                     <Button auto onPress={() => validateForm() && handleModify(form)}>
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

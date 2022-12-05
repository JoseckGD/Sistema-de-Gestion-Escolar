// import { Button } from '../Button';
// import homepage from '../../img/homepage.png';
import { TableD } from './TableD';

import { Button, Tooltip } from "@nextui-org/react";
import { FiEdit } from "react-icons/fi";
import { MdOutlineDelete } from "react-icons/md";

let id = '';
let calificacionFinal = 0.0;
export const TableRow = ({ title, el, eventoModify, eventoDelete, index, handleOpenModal }) => {

   // const [id, setId] = useState(null);
   calificacionFinal = 0;
   const getPromedioAlumno = () => {

      Object.values(el).map((campo, index) => (
         (title === 'calificacion' || title === 'calificaciones') && (
            title === 'calificaciones' ?
               index >= 2 && (calificacionFinal += parseFloat(campo))
               :
               index >= 1 && (calificacionFinal += parseFloat(campo))
         ))
      )

      return ((calificacionFinal / 3).toFixed(2));
   }

   title === 'dispositivos' && (id = el.id_dispositivo_iot);
   title === 'usuarios' && (id = el.id_usuario);
   // title === 'usuarios' && setId(el.id);

   return (
      <tr key={Math.random()}>
         <TableD elemento={index + 1} key={Math.random()} />
         {Object.values(el).map((campo, index) => (
            <TableD key={`${id}_${campo}_${index}`} elemento={campo} />
         ))}
         {(title === 'calificacion' || title === 'calificaciones') && (
            <TableD elemento={`${getPromedioAlumno()}`} key={Math.random()} />
         )}

         {(title !== 'calificaciones' && title !== 'Tus') && (

            <td className='td-modificar' data-id={id}>
               <Tooltip content="Modificar">
                  <Button
                     shadow
                     color="success"
                     auto
                     icon={<FiEdit />}
                     // onPress={() => eventoModify(el)}
                     onPress={() => handleOpenModal('Modificar', title, (title === 'calificacion' ? { ...el, 'calificacionFinal': `${getPromedioAlumno()}` } : el))}
                  />
               </Tooltip>
            </td>
         )}

         {title === 'usuarios' && (

            <td className='td-eliminar' data-id={id}>
               <Tooltip content="Eliminar">
                  <Button
                     shadow
                     auto
                     color="error"
                     icon={<MdOutlineDelete />}
                     // onPress={() => eventoDelete(el)}
                     onPress={() => handleOpenModal('Eliminar', title, el)}
                  />
               </Tooltip>
            </td>
         )}



      </tr>
   )
}
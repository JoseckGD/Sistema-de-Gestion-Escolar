import { dataTables } from '../../data/DataTables'
import { TableHead } from './TableHead'
import '../../styles/StylesComponents/Table.css'
import { useStateContext } from '../../contexts/ContextProvider';
import { TableRow } from './TableRow';

import { Loading } from "@nextui-org/react";

let indexT;
export const Table = ({ title, eventoModify, eventoDelete, data, handleOpenModal }) => {

   const { loading, } = useStateContext();

   dataTables.map((item, index) => (
      item.titleTable.includes(title) && (indexT = index)
   ));

   return (
      <div className="tabla">
         <table>
            <caption>{dataTables[indexT].titleTable}</caption>
            <TableHead indexTable={indexT} />
            <tbody>
               {loading &&
                  <tr>
                     <td colSpan="100%">
                        <Loading type='points' color="primary" textColor="primary">
                           Cargando
                        </Loading>
                     </td>
                  </tr>
               }
               {data ? (
                  (data.length > 0) ? (
                     data.map((el, index) => (
                        < TableRow
                           key={`${index}_${Math.random()}}`}
                           title={title}
                           index={index}
                           el={el}
                           eventoModify={eventoModify}
                           eventoDelete={eventoDelete}
                           handleOpenModal={handleOpenModal}
                        />
                     ))
                  ) : (
                     <tr>
                        <td colSpan="100%">Sin Datos</td>
                     </tr>
                  ))
                  :
                  <tr>
                     <td colSpan="100%">
                        <Loading type="points" size="md" color="primary" textColor="primary">
                           Selecciona una materia
                        </Loading>
                     </td>
                  </tr>
               }
            </tbody>
         </table>
      </div>
   )

}

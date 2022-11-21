import { dataTables } from '../../data/DataTables'
export const TableHeader = ({ indexTable }) => {
   // console.log(dataTables[indexTable].titleTable);
   return (
      <>
         {dataTables[indexTable].titleTableHead.map((item, index) =>
            // console.log(item.name)
            <th key={index}>{item.name}</th>
         )}
         {indexTable !== 0 &&
            <th colSpan={2}>Acciones</th>
         }
      </>
   )
}

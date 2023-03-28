import { Navigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';

export const HomePage = () => {

   const { authUser, rolUser } = useStateContext();
   return (
      <>
         {authUser === 'false' ? <Navigate to='/welcome' /> : (
            <>
               {rolUser === 'Docente' && (
                  <Navigate to='/docente' />
               )}
               {rolUser === 'Alumno' && (
                  <Navigate to='/alumno' />
               )}
               {rolUser === 'Administrativo' && (
                  <Navigate to='/administrativo' />
               )}
            </>
         )}
      </>
   )
}
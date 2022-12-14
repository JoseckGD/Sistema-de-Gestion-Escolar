import { useStateContext } from '../contexts/ContextProvider';
import { buttonsData, buttonsDataAdmin, buttonsDataAlumno, buttonsDataDocente } from '../data/SidebarData';
import { IoMdExit } from "react-icons/io";
import '../styles/StylesComponents/Sidebar.css'

import { Card, Text, Button } from "@nextui-org/react";

export const Sidebar2 = ({ handleUser, user, }) => {

   const { rolUser, handleCloseSesion } = useStateContext();
   // console.log(isUser);
   return (
      <Card variant="bordered" className='Sidebar' css={{ $$cardColor: '#131d62', }}>
         <Card.Body className='content'>

            <Text h2 className='txt' weight="bold">
               Menu {rolUser !== 'rol' && rolUser}
            </Text>

            {/* <div className='txt'>
               <h2>Menu {rolUser !== 'rol' && rolUser}</h2>
            </div> */}
            <div className='btns'>
               {rolUser === 'rol' && buttonsData.map((el) => (

                  <Button shadow icon={el.icon} color="black" size="lg"
                     key={el.titulo} className={`btn ${el.titulo === user ? 'active' : ''}`} onPress={() => handleUser(el.titulo)}>
                     {el.titulo}
                  </Button>
               ))}

               {
                  rolUser === 'Administrativo' && (
                     buttonsDataAdmin.map((el) => (

                        <Button shadow icon={el.icon} color="black" size="lg"
                           key={el.titulo} className={`btn ${el.titulo === user ? 'active' : ''}`} onPress={() => handleUser(el.titulo)}>
                           {el.titulo}
                        </Button>
                     )))
               }

               {
                  rolUser === 'Alumno' && (
                     buttonsDataAlumno.map((el) => (
                        <Button shadow icon={el.icon} color="black" size="lg"
                           key={el.titulo} className={`btn ${el.titulo === user ? 'active' : ''}`} onPress={() => handleUser(el.titulo)}>
                           {el.titulo}
                        </Button>
                        // <div key={el.titulo} className={`btn ${el.titulo === user ? 'active' : ''}`} >
                        //    <div className='icon-btn'>
                        //       {el.icon}
                        //    </div>
                        //    {/* <img src={el.icon} className='icon-btn' alt='logo' /> */}
                        //    {el.titulo}
                        // </div>
                     )))
               }

               {
                  rolUser === 'Docente' && (
                     buttonsDataDocente.map((el) => (
                        <Button shadow icon={el.icon} color="black" size="lg"
                           key={el.titulo} className={`btn ${el.titulo === user ? 'active' : ''}`} onPress={() => handleUser(el.titulo)}>
                           {el.titulo}
                        </Button>
                        // <div key={el.titulo} className={`btn ${el.titulo === user ? 'active' : ''}`} >
                        //    <div className='icon-btn'>
                        //       {el.icon}
                        //    </div>
                        //    {/* <img src={el.icon} className='icon-btn' alt='logo' /> */}
                        //    {el.titulo}
                        // </div>
                     )))
               }

            </div>
            {rolUser !== 'rol' &&
               <Button shadow icon={<IoMdExit />} color="error" size="lg"
                  key={'salir'} className='btn-salir' onPress={() => handleCloseSesion()}>
                  Salir
               </Button>
            }
         </Card.Body>
      </Card>
   )
}

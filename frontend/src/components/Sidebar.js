import React, { useEffect, useState } from 'react'
import { useStateContext } from '../contexts/ContextProvider';
import { buttonsData, buttonsDataAdmin, buttonsDataAlumno, buttonsDataDocente } from '../data/SidebarData';
import { IoMdExit } from "react-icons/io";
import '../styles/StylesComponents/Sidebar.css'

export const Sidebar = ({ handleUser, user, }) => {

   const { rolUser, authUser, handleCloseSesion } = useStateContext();
   const [isUser, setIsUser] = useState(false);
   // console.log(isUser);
   return (
      <section className='Sidebar'>
         <div className='content'>
            <div className='txt'>
               <h2>Menu {rolUser !== 'rol' && rolUser}</h2>
            </div>
            <div className='btns'>
               {rolUser === 'rol' && buttonsData.map((el) => (
                  <div key={el.titulo} className={`btn ${el.titulo === user ? 'active' : ''}`} onClick={() => handleUser(el.titulo)}>
                     <div className='icon-btn'>
                        {el.icon}
                     </div>
                     {/* <img src={el.icon} className='icon-btn' alt='logo' /> */}
                     {el.titulo}
                  </div>
               ))}

               {
                  rolUser === 'Administrativo' && (
                     buttonsDataAdmin.map((el) => (
                        <div key={el.titulo} className={`btn ${el.titulo === user ? 'active' : ''}`} >
                           <div className='icon-btn'>
                              {el.icon}
                           </div>
                           {/* <img src={el.icon} className='icon-btn' alt='logo' /> */}
                           {el.titulo}
                        </div>
                     )))
               }

               {
                  rolUser === 'Alumno' && (
                     buttonsDataAlumno.map((el) => (
                        <div key={el.titulo} className={`btn ${el.titulo === user ? 'active' : ''}`} >
                           <div className='icon-btn'>
                              {el.icon}
                           </div>
                           {/* <img src={el.icon} className='icon-btn' alt='logo' /> */}
                           {el.titulo}
                        </div>
                     )))
               }

               {
                  rolUser === 'Docente' && (
                     buttonsDataDocente.map((el) => (
                        <div key={el.titulo} className={`btn ${el.titulo === user ? 'active' : ''}`} >
                           <div className='icon-btn'>
                              {el.icon}
                           </div>
                           {/* <img src={el.icon} className='icon-btn' alt='logo' /> */}
                           {el.titulo}
                        </div>
                     )))
               }

            </div>
            <div className='btn-salir'>
               {rolUser !== 'rol' &&
                  <div className='btn' onClick={() => handleCloseSesion()}>
                     <div className='icon-btn'>
                        <IoMdExit />
                     </div>
                     Salir
                  </div>
               }
            </div>
         </div>
      </section>
   )
}

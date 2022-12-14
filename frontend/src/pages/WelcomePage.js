import React, { useState } from 'react'
import { Header } from '../components/Header'
import { LoginForm } from '../components/LoginForm'
import { Sidebar2 } from '../components/Sidebar2'
import '../styles/WelcomePage.css'
import logo from '../img/logo.jpg'

import { Card, Row, Text, Avatar, Spacer } from "@nextui-org/react";
import { useStateContext } from '../contexts/ContextProvider'
import { Navigate } from 'react-router-dom'

export const WelcomePage = () => {
   const [user, setUser] = useState('');

   const { authUser, rolUser } = useStateContext();

   const handleUser = (u) => {
      setUser(u);
   }

   return (
      <>
         {authUser === 'true' ? <Navigate to={`/${rolUser}`} /> : (
            <>
               <Header handleUser={handleUser} />
               <Sidebar2 handleUser={handleUser} user={user} />
               {/* <Card css={{ $$cardColor: '#f4d31f', m: '1rem 0' }} variant="bordered" className='main'> */}
               <Card css={{ $$cardColor: '#0072f500', m: '1rem 0' }} className='main'>
                  <Card.Body>
                     {
                        user === '' ? (
                           <>
                              <Row justify="center" align="center" >
                                 <Text h3 color="white" css={{ m: 0 }} >
                                    Bienvenido al Sistema de Gestion Escoler
                                 </Text>
                              </Row>
                              <Spacer y={1} />
                              <Row justify="center" align="center" >
                                 <Avatar
                                    src={logo}
                                    zoomed
                                    css={{ size: "20rem" }}
                                 />
                              </Row>
                           </>
                        )
                           : (
                              <LoginForm rol={user} />
                           )
                     }
                  </Card.Body>
               </Card>
            </>
         )}
      </>
   )
}

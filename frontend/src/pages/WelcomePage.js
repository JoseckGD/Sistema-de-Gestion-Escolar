import React, { useState } from 'react'
import { Header } from '../components/Header'
import { LoginForm } from '../components/LoginForm'
import { Sidebar2 } from '../components/Sidebar2'
import '../styles/WelcomePage.css'

import { Card, Row, Text } from "@nextui-org/react";
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
               <Header />
               <Sidebar2 handleUser={handleUser} user={user} />
               <Card css={{ $$cardColor: '#0072f560', m: '1rem 0' }} variant="bordered" className='main'>
                  <Card.Body>
                     {
                        user === '' ? (
                           <Row justify="center" align="center">
                              <Text h3 color="white" css={{ m: 0 }} >
                                 Bienvenido al Sistema de Gestion Escoler
                              </Text>
                           </Row>
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

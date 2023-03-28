import { Container, Card, Row, Text, Avatar } from "@nextui-org/react";
import logo from '../img/logo.jpg'
import '../styles/StylesComponents/Header.css'

export const Header = ({ nameUser, handleUser }) => {
   return (
      <Container xl>
         <Card css={{ $$cardColor: '#131d62', m: '1rem 0' }} variant="bordered">
            <Card.Body>
               <Row justify="center" align="center">
                  <Avatar
                     size="xl"
                     src={logo}
                     squared
                     zoomed
                     onClick={() => handleUser("")}
                  />
                  <Text h2 color="white" css={{ m: 0 }} >
                     Bienvenido {nameUser}
                  </Text>
               </Row>
            </Card.Body>
         </Card>
      </Container>
   )
}

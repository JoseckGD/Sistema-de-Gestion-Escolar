import { Container, Card, Row, Text } from "@nextui-org/react";

export const Header = ({ nameUser }) => {
   return (
      <Container xl>
         <Card css={{ $$cardColor: '#0072f560', m: '1rem 0' }} variant="bordered">
            <Card.Body>
               <Row justify="center" align="center">
                  <Text h2 color="white" css={{ m: 0 }} >
                     Bienvenido {nameUser}
                  </Text>
               </Row>
            </Card.Body>
         </Card>
      </Container>
   )
}

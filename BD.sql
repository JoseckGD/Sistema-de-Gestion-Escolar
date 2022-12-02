-- -- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
-- --
-- -- Host: 127.0.0.1    Database: bd_gestion_escolar
-- -- ------------------------------------------------------
-- -- Server version	8.0.27

-- /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
-- /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
-- /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
-- /*!50503 SET NAMES utf8 */;
-- /*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
-- /*!40103 SET TIME_ZONE='+00:00' */;
-- /*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
-- /*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
-- /*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- /*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- --
-- -- Table structure for table `administradores`
-- --

-- DROP TABLE IF EXISTS `administradores`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `administradores` (
--   `idAdministrador` int NOT NULL AUTO_INCREMENT,
--   `nombreCompleto` varchar(100) NOT NULL,
--   PRIMARY KEY (`idAdministrador`)
-- ) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `administradores`
-- --

-- LOCK TABLES `administradores` WRITE;
-- /*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
-- INSERT INTO `administradores` VALUES (1,'Jose Ensastiga');
-- /*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `alumnos`
-- --

-- DROP TABLE IF EXISTS `alumnos`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `alumnos` (
--   `idAlumno` int NOT NULL AUTO_INCREMENT,
--   `nombreCompleto` varchar(100) NOT NULL,
--   `idMateria` int NOT NULL,
--   `idNota` int NOT NULL,
--   `telefono` varchar(15) NOT NULL,
--   `correo` varchar(45) NOT NULL,
--   `genero` varchar(45) NOT NULL,
--   PRIMARY KEY (`idAlumno`)
-- ) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `alumnos`
-- --

-- LOCK TABLES `alumnos` WRITE;
-- /*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
-- INSERT INTO `alumnos` VALUES (2,'Otli',1,1,'771','@gmail.com.mx','M'),(3,'Efren',1,2,'771','@gmail.com.mx','M'),(4,'Angel',1,3,'771','@gmail.com.mx','M'),(5,'Kevin',0,0,'771','@gmail.com.mx','M'),(6,'Toño',0,0,'771','@gmail.com.mx','M'),(7,'prueba1',0,0,'771','prueba1@gmail.com.mx','M');
-- /*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `docentes`
-- --

-- DROP TABLE IF EXISTS `docentes`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `docentes` (
--   `idDocente` int NOT NULL AUTO_INCREMENT,
--   `nombreCompleto` varchar(100) NOT NULL,
--   `idMateria` int NOT NULL,
--   `telefono` varchar(15) NOT NULL,
--   `correo` varchar(45) NOT NULL,
--   PRIMARY KEY (`idDocente`)
-- ) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `docentes`
-- --

-- LOCK TABLES `docentes` WRITE;
-- /*!40000 ALTER TABLE `docentes` DISABLE KEYS */;
-- INSERT INTO `docentes` VALUES (5,'Marco Waldo',2,'771','m@gmail.com'),(6,'Kevin',0,'771','k@gmail.com'),(7,'Yessica',0,'771','y@gmail.com'),(8,'Alicia',0,'771','al@gmail.com'),(9,'Arturo',0,'771','ar@gmail.com'),(10,'Jorge Alberto',0,'771','ja@gmail.com'),(11,'Jaime',0,'771','j@gmail.com');
-- /*!40000 ALTER TABLE `docentes` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `materias`
-- --

-- DROP TABLE IF EXISTS `materias`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `materias` (
--   `idMateria` int NOT NULL AUTO_INCREMENT,
--   `idDocente` int NOT NULL,
--   `nombre` varchar(45) NOT NULL,
--   PRIMARY KEY (`idMateria`)
-- ) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `materias`
-- --

-- LOCK TABLES `materias` WRITE;
-- /*!40000 ALTER TABLE `materias` DISABLE KEYS */;
-- INSERT INTO `materias` VALUES (1,5,'Calculo Diferencial'),(2,5,'Calculo Integral'),(3,2,'Ingles 1'),(4,2,'Ingles 2'),(5,2,'Ingles 3'),(6,3,'Español'),(7,3,'a'),(8,5,'Matematicas 1'),(9,5,'Matematicas 2');
-- /*!40000 ALTER TABLE `materias` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `notas`
-- --

-- DROP TABLE IF EXISTS `notas`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `notas` (
--   `idNota` int NOT NULL AUTO_INCREMENT,
--   `idAlumno` int NOT NULL,
--   `idMateria` int NOT NULL,
--   `idDocente` int NOT NULL,
--   `parcial1` float NOT NULL,
--   `parcial2` float NOT NULL,
--   `parcial3` float NOT NULL,
--   PRIMARY KEY (`idNota`)
-- ) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `notas`
-- --

-- LOCK TABLES `notas` WRITE;
-- /*!40000 ALTER TABLE `notas` DISABLE KEYS */;
-- INSERT INTO `notas` VALUES (1,2,1,5,10,2,1),(2,3,1,5,10,10,10),(3,4,1,5,0,0,0);
-- /*!40000 ALTER TABLE `notas` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `periodos`
-- --

-- DROP TABLE IF EXISTS `periodos`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `periodos` (
--   `idPeriodo` int NOT NULL AUTO_INCREMENT,
--   `periodo` varchar(45) NOT NULL,
--   `fechaInicio` varchar(45) NOT NULL,
--   `fechaTermino` varchar(45) NOT NULL,
--   PRIMARY KEY (`idPeriodo`)
-- ) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `periodos`
-- --

-- LOCK TABLES `periodos` WRITE;
-- /*!40000 ALTER TABLE `periodos` DISABLE KEYS */;
-- INSERT INTO `periodos` VALUES (1,'Enero- Abril 2022','09/01/2022','28/04/2022'),(2,'Mayo - Agosto 2022','02/05/2022','31/08/2022'),(3,'Septiembre - Diciembre 2022','05/09/2022','16/12/2022');
-- /*!40000 ALTER TABLE `periodos` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `usuarios`
-- --

-- DROP TABLE IF EXISTS `usuarios`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `usuarios` (
--   `idUsuario` int NOT NULL AUTO_INCREMENT,
--   `usuario` varchar(20) NOT NULL,
--   `contrasena` varchar(10) NOT NULL,
--   `nombre` varchar(45) NOT NULL,
--   `tipoUsuario` varchar(45) NOT NULL,
--   PRIMARY KEY (`idUsuario`)
-- ) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `usuarios`
-- --

-- LOCK TABLES `usuarios` WRITE;
-- /*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
-- INSERT INTO `usuarios` VALUES (1,'jose','1234','Jose Ensastiga','Administrativo'),(2,'otli','1234','Otli','Alumno'),(3,'efren','1234','Efren','Alumno'),(4,'vanoye','1234','Vanoye','Docente'),(5,'Waldo','1234','Marco Waldo','Docente'),(6,'Angel','Angel','Angel','Alumno'),(7,'Kevin','Kevin','Kevin','Alumno'),(8,'Toño','Toño','Toño','Alumno'),(9,'prueba1','1234','prueba1','Alumno');
-- /*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
-- UNLOCK TABLES;
-- /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

-- /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
-- /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
-- /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- -- Dump completed on 2022-11-21 10:16:20


-- ============================ BD v2  ============================ 



-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: bd_gestion_escolar
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administradores`
--

DROP TABLE IF EXISTS `administradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administradores` (
  `idAdministrador` int NOT NULL AUTO_INCREMENT,
  `nombreCompleto` varchar(100) NOT NULL,
  PRIMARY KEY (`idAdministrador`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administradores`
--

LOCK TABLES `administradores` WRITE;
/*!40000 ALTER TABLE `administradores` DISABLE KEYS */;
INSERT INTO `administradores` VALUES (1,'Jose Ensastiga');
/*!40000 ALTER TABLE `administradores` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos` (
  `idAlumno` int NOT NULL AUTO_INCREMENT,
  `nombreCompleto` varchar(100) NOT NULL,
  `idMateria` int NOT NULL,
  `idNota` int NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `genero` varchar(45) NOT NULL,
  PRIMARY KEY (`idAlumno`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` VALUES (2,'Otli',1,1,'771','otli@gmail.com.mx','M'),(3,'Efren',1,2,'771','@gmail.com.mx','M'),(4,'Angel',1,3,'771','@gmail.com.mx','M'),(5,'Kevin',0,0,'771','@gmail.com.mx','M'),(6,'Toño',0,0,'771','@gmail.com.mx','M'),(7,'prueba1',0,0,'771','prueba1@gmail.com.mx','M'),(8,'prueba2',0,0,'771','@gmail.com','M');
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docentes`
--

DROP TABLE IF EXISTS `docentes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docentes` (
  `idDocente` int NOT NULL AUTO_INCREMENT,
  `nombreCompleto` varchar(100) NOT NULL,
  `idMateria` int NOT NULL,
  `telefono` varchar(15) NOT NULL,
  `correo` varchar(45) NOT NULL,
  PRIMARY KEY (`idDocente`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docentes`
--

LOCK TABLES `docentes` WRITE;
/*!40000 ALTER TABLE `docentes` DISABLE KEYS */;
INSERT INTO `docentes` VALUES (5,'Marco Waldo',2,'771','m@gmail.com'),(6,'Kevin',0,'77123','k@gmail.com'),(7,'Yessica',0,'771','y@gmail.com'),(8,'Alicia',0,'771','al@gmail.com'),(9,'Arturo',0,'771','ar@gmail.com'),(10,'Jorge Alberto',0,'771','ja@gmail.com'),(11,'Jaime',0,'771','j@gmail.com'),(12,'Rosario',0,'771','r@gmail.com'),(13,'Silvia',0,'771','s@gmail.com'),(14,'a',0,'771','@gmail.ocm');
/*!40000 ALTER TABLE `docentes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `materias`
--

DROP TABLE IF EXISTS `materias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materias` (
  `idMateria` int NOT NULL AUTO_INCREMENT,
  `idDocente` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `idPeriodo` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idMateria`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materias`
--

LOCK TABLES `materias` WRITE;
/*!40000 ALTER TABLE `materias` DISABLE KEYS */;
INSERT INTO `materias` VALUES (1,5,'Calculo Diferencial','3'),(2,5,'Calculo Integral','3'),(3,0,'Ingles 1','3'),(4,0,'Ingles 2','3'),(5,12,'Ingles 7','3'),(6,7,'Liderazgo','3'),(7,9,'Sistemas Operativos','3'),(8,5,'Matematicas 1','1'),(9,5,'Matematicas 2','2'),(10,13,'Lenguajes y Automatas','3'),(11,12,'ingles 6','3');
/*!40000 ALTER TABLE `materias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notas`
--

DROP TABLE IF EXISTS `notas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notas` (
  `idNota` int NOT NULL AUTO_INCREMENT,
  `idAlumno` int NOT NULL,
  `idMateria` int NOT NULL,
  `idDocente` int NOT NULL,
  `parcial1` float NOT NULL,
  `parcial2` float NOT NULL,
  `parcial3` float NOT NULL,
  PRIMARY KEY (`idNota`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notas`
--

LOCK TABLES `notas` WRITE;
/*!40000 ALTER TABLE `notas` DISABLE KEYS */;
INSERT INTO `notas` VALUES (1,2,1,5,10,2,1),(2,3,1,5,10,10,10),(3,4,1,5,0,0,0);
/*!40000 ALTER TABLE `notas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `periodos`
--

DROP TABLE IF EXISTS `periodos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `periodos` (
  `idPeriodo` int NOT NULL AUTO_INCREMENT,
  `periodo` varchar(45) NOT NULL,
  `fechaInicio` varchar(45) NOT NULL,
  `fechaTermino` varchar(45) NOT NULL,
  PRIMARY KEY (`idPeriodo`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodos`
--

LOCK TABLES `periodos` WRITE;
/*!40000 ALTER TABLE `periodos` DISABLE KEYS */;
INSERT INTO `periodos` VALUES (1,'Enero - Abril 2022','09/01/2022','28/04/2022'),(2,'Mayo - Agosto 2022','02/05/2022','31/08/2022'),(3,'Septiembre - Diciembre 2022','05/09/2022','16/12/2022');
/*!40000 ALTER TABLE `periodos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `idUsuario` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(20) NOT NULL,
  `contrasena` varchar(10) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `tipoUsuario` varchar(45) NOT NULL,
  PRIMARY KEY (`idUsuario`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'jose','1234','Jose Ensastiga','Administrativo'),(2,'otli','1234','Otli','Alumno'),(3,'efren','1234','Efren','Alumno'),(4,'vanoye','1234','Vanoye','Docente'),(5,'Waldo','1234','Marco Waldo','Docente'),(6,'Angel','Angel','Angel','Alumno'),(7,'Kevin','Kevin','Kevin','Alumno'),(8,'Toño','Toño','Toño','Alumno'),(9,'prueba1','1234','prueba1','Alumno'),(10,'prueba2','prueba2','prueba2','Alumno'),(11,'Rosario','Rosario','Rosario','Docente'),(12,'Silvia','Silvia','Silvia','Docente'),(13,'a','a','a','Docente');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-01 22:27:53

import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";
import { FiUsers } from "react-icons/fi"
import { GrUserAdmin } from "react-icons/gr";
import { BsJournalBookmark } from "react-icons/bs"
import { CgNotes } from "react-icons/cg"

export const buttonsData = [
   {
      titulo: 'Docente',
      icon: <FaChalkboardTeacher />,
   },
   {
      titulo: 'Alumno',
      icon: <FaUserGraduate />,
   },
   {
      titulo: 'Administrativo',
      icon: <GrUserAdmin />,
   },
];

export const buttonsDataAdmin = [
   {
      titulo: 'Usuarios',
      icon: <FiUsers />,
   },
   {
      titulo: 'Docentes',
      icon: <FaChalkboardTeacher />,
   },
   {
      titulo: 'Alumnos',
      icon: <FaUserGraduate />,
   },
   {
      titulo: 'Periodos',
      icon: <CgNotes />,
   },
   {
      titulo: 'Materias',
      icon: <BsJournalBookmark />,
   },
];


export const buttonsDataAlumno = [
   {
      titulo: 'Calificaciones',
      icon: <CgNotes />,
   },
   {
      titulo: 'Materias',
      icon: <BsJournalBookmark />,
   },
];

export const buttonsDataDocente = [
   {
      titulo: 'Alumnos',
      icon: <FaUserGraduate />,
   },
   {
      titulo: 'Materias',
      icon: <BsJournalBookmark />,
   },
];
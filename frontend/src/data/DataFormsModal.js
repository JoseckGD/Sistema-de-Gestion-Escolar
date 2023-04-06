
//DATA del formulario de AGREGAR un usuario===========================================
export const initialFormUserAdd = {
   nombre: "",
   usuario: "",
   contrasena: "",
   Confirmar_contrasena: "",
   tipoUsuario: "",
   id: null,
};

export const typeInputForm_UserAdd = [
   'text',
   'text',
   'password',
   'password',
   'text'
]

export const dataFormUserAdd = {
   nombre: "",
   usuario: "",
   contrasena: "",
   Confirmar_contrasena: "",
   tipoUsuario: "",
   id: null,
};
export const labelFormUserAdd = {
   'Nombre': "Escribe el nombre",
   'Usuario': "Escribe el usuario",
   'Contraseña': "Escribe la contraseña",
   'Confirmar la contraseña': "Escribe la contraseña otravez",
   'Tipo de usuario': "Escribe el tipo de usuario (Alumno / Docente)",
};


//DATA del formulario de MODIFICAR un usuario=========================================
export const initialFormUserModify = {
   id: "",
   usuario: "",
   tipoUsuario: "",
};

export const labelFormUserModify = {
   'ID Usuario': "Escribe el id",
   'Usuario': "Escribe el usuario",
   'Tipo de usuario': "Escribe el tipo de usuario (Alumno / Docente)",
};


//DATA del formulario de MODIFICAR una calificacion=========================================
export const initialFormCalificacionModify = {
   alumno: "",
   parcial1: "",
   parcial2: "",
   parcial3: "",
   // final: "",
};

export const typeInputForm_CalificacionModify = [
   'text',
   'number',
   'number',
   'number',
]

export const labelFormCalificacionModify = {
   'Nombre del alumno': "Escribe el nombre del alumno",
   'Parcial 1': "Escribe la calificaion del parcial 1",
   'Parcial 2': "Escribe la calificaion del parcial 2",
   'Parcial 3': "Escribe la calificaion del parcial 3",
   // 'Calificación final': "Calificacion final",
};


//DATA del formulario de MODIFICAR un periodo=========================================
export const initialFormPeriodoModify = {
   idPeriodo: "",
   periodo: "",
   fechaInicio: "",
   fechaTermino: "",
};

export const labelFormPeriodoModify = {
   'ID Periodo': "Escribe el id del periodo",
   'Periodo': "Escribe el periodo",
   'Fecha de inicio': "Escribe la fecha de inicio",
   'Fecha de termino': "Escribe la fecha de termino",
};
//DATA del formulario de AGREGAR un periodo=========================================
export const initialFormPeriodoAdd = {
   periodo: "",
   fechaInicio: "",
   fechaTermino: "",
   idPeriodo: null,
};

export const typeInputForm_PeriodoAdd = [
   'text',
   'date',
   'date',
]

export const labelFormPeriodoAdd = {
   'Periodo': "Escribe el periodo",
   'Fecha de inicio': "Escribe la fecha de inicio",
   'Fecha de termino': "Escribe la fecha de termino",
   'ID Periodo': "Escribe el id del periodo",
};




//DATA del formulario de MODIFICAR una materia=========================================
export const initialFormMateriaModify = {
   idMateria: "",
   nombre: "",
   nombreCompleto: "",
   idPeriodo: "",
};
export const labelFormMateriaModify = {
   'ID Materia': "Escribe el id de la materia",
   'Materia': "Escribe el nombre de la materia",
   'Docente': "Escribe el docente a cargo",
   'Periodo': "Escribe el periodo",
};

//DATA del formulario de AGREGAR una materia=========================================
export const initialFormMateriaAdd = {
   nombre: "",
   idDocente: "",
   idPeriodo: "",
   idMateria: null,
};

export const labelFormMateriaAdd = {
   'Materia': "Escribe el nombre de la materia",
   'Docente': "Escribe el docente a cargo",
   'Periodo': "Escribe el periodo",
   'ID Materia': "Escribe el id de la materia",
};




//DATA del formulario de MODIFICAR una alumno=========================================
export const initialFormAlumnoModify = {
   idAlumno: "",
   nombreCompleto: "",
   telefono: "",
   correo: "",
   genero: "",
};

export const labelFormAlumnoModify = {
   'Matricula': "Escribe el id del alumno",
   'Nombre': "Escribe el nombre del alumno",
   'Telefono': "Escribe el telefono del alumno",
   'Correo': "Escribe el correo del alumno",
   'Genero': "Escribe el genero del alumno",
};

//DATA del formulario de AGREGAR un alumno=========================================
export const initialFormAlumnoAdd = {
   nombreCompleto: "",
   telefono: "",
   correo: "",
   genero: "",
   idAlumno: null,
};

export const typeInputForm_AlumnoAdd = [
   'text',
   'number',
   'text',
   'text',
]

export const dataFormAlumnoAdd = {
   nombreCompleto: "",
   telefono: "",
   correo: "",
   genero: "",
   idAlumno: null,
};

export const labelFormAlumnoAdd = {
   'Nombre': "Escribe el nombre del alumno",
   'Telefono': "Escribe el telefono del alumno",
   'Correo': "Escribe el correo del alumno",
   'Genero': "Escribe el genero del alumno",
   'Matricula': "Escribe el id del alumno",
};



//DATA del formulario de MODIFICAR una alumno=========================================
export const initialFormDocenteModify = {
   idDocente: "",
   nombreCompleto: "",
   telefono: "",
   correo: "",
};

export const labelFormDocenteModify = {
   'Matricula': "Escribe el id del docente",
   'Nombre': "Escribe el nombre del docente",
   'Telefono': "Escribe el telefono del docente",
   'Correo': "Escribe el correo del docente",
};

//DATA del formulario de AGREGAR un alumno=========================================
export const initialFormDocenteAdd = {
   nombreCompleto: "",
   telefono: "",
   correo: "",
   idDocente: null,
};
export const typeInputForm_DocenteAdd = [
   'text',
   'number',
   'text',
]
export const dataFormDocenteAdd = {
   nombreCompleto: "",
   telefono: "",
   correo: "",
   idDocente: null,
};

export const labelFormDocenteAdd = {
   'Nombre': "Escribe el nombre del docente",
   'Telefono': "Escribe el telefono del docente",
   'Correo': "Escribe el correo del docente",
   'Matricula': "Escribe el id del docente",
};

//DATA del formulario de MODIFICAR un grupo=========================================
export const initialFormGrupoModify = {
   idGrupo: "",
   idDocente: "",
   idMateria: "",
   idPeriodo: "",
   alumnos: "",
};

export const labelFormGrupoModify = {
   'ID Grupo': "Escribe el id del grupo",
   'ID Docente': "Escribe el id del docente a cargo del grupo",
   'ID Materia': "Escribe el id de la materia del grupo",
   'ID Periodo': "Escribe el id del periodo",
   'Alumno': "Escoje los alumnos del grupo",
};
//DATA del formulario de AGREGAR un periodo=========================================
export const initialFormGrupoAdd = {
   idDocente: "",
   idMateria: "",
   idPeriodo: "",
   alumnos: "",
};

export const typeInputForm_GrupoAdd = [
   'number',
   'number',
   'number',
   'text',
]

export const labelFormGrupoAdd = {
   'Docente': "Escribe el docente",
   'Materia': "Escribe la materia",
   'Periodo': "Escribe el periodo",
   'alumnos': "Escribe el alumnos",
};
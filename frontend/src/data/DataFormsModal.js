
//DATA del formulario de AGREGAR un usuario===========================================
export const initialFormUserAdd = {
   nombre: "",
   usuario: "",
   contrasena: "",
   Confirmar_contrasena: "",
   tipoUsuario: "",
   id: null,
};
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
   final: "",
};

export const labelFormCalificacionModify = {
   'Nombre del alumno': "Escribe el nombre del alumno",
   'Parcial 1': "Escribe la calificaion del parcial 1",
   'Parcial 2': "Escribe la calificaion del parcial 2",
   'Parcial 3': "Escribe la calificaion del parcial 3",
   'Calificación final': "Calificacion final",
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
   idPeriodo: "",
};

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
};

export const labelFormMateriaModify = {
   'ID Materia': "Escribe el id de la materia",
   'Materia': "Escribe el nombre de la materia",
   'Docente': "Escribe el docente a cargo",
};

//DATA del formulario de AGREGAR una materia=========================================
export const initialFormMateriaAdd = {
   nombre: "",
   idDocente: "",
   idMateria: "",
};

export const labelFormMateriaAdd = {
   'Materia': "Escribe el nombre de la materia",
   'Docente': "Escribe el docente a cargo",
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
   'ID Alumno': "Escribe el id del alumno",
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
   idAlumno: "",
};

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
   'ID Alumno': "Escribe el id del alumno",
};



//DATA del formulario de MODIFICAR una alumno=========================================
export const initialFormDocenteModify = {
   idDocente: "",
   nombreCompleto: "",
   telefono: "",
   correo: "",
};

export const labelFormDocenteModify = {
   'ID Docente': "Escribe el id del docente",
   'Nombre': "Escribe el nombre del docente",
   'Telefono': "Escribe el telefono del docente",
   'Correo': "Escribe el correo del docente",
};

//DATA del formulario de AGREGAR un alumno=========================================
export const initialFormDocenteAdd = {
   nombreCompleto: "",
   telefono: "",
   correo: "",
   idAlumno: "",
};

export const dataFormDocenteAdd = {
   nombreCompleto: "",
   telefono: "",
   correo: "",
   idAlumno: null,
};

export const labelFormDocenteAdd = {
   'Nombre': "Escribe el nombre del docente",
   'Telefono': "Escribe el telefono del docente",
   'Correo': "Escribe el correo del docente",
   'ID Alumno': "Escribe el id del docente",
};
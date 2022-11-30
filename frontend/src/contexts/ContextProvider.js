import React, { createContext, useContext, useEffect, useState } from 'react';
import fetchAJAX from '../helpers/fetch';

const StateContext = createContext();

const initialAuthUser = localStorage.getItem('authUser');
const initialNameUser = localStorage.getItem('nameUser');
const initialAuthRol = localStorage.getItem('authRol');

const rutaBase = 'http://localhost:3001/';

let dataGet = null;

export const ContextProvider = ({ children }) => {

  const [authUser, setAuthUser] = useState(initialAuthUser);
  const [rolUser, setRolUser] = useState(!initialAuthRol ? 'rol' : initialAuthRol);
  const [nameUser, setNameUser] = useState(!initialNameUser ? '' : initialNameUser);

  const [newData, setNewData] = useState(null);

  const [dbUser, setDbUser] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [url, setUrl] = useState("");

  const [userLogin, setUserLogin] = useState(null);

  const [allUsuarios, setAllUsuarios] = useState(null);

  const [allMaterias, setAllMaterias] = useState(null);
  const [materia, setMateria] = useState(null);
  const [docenteMaterias, setDocenteMaterias] = useState(null);
  const [alumnoMaterias, setAlumnoMaterias] = useState(null);

  const [allDocentes, setAllDocentes] = useState(null);
  const [docente, setDocente] = useState(null);

  const [allAlumnos, setAllAlumnos] = useState(null);
  const [alumno, setAlumno] = useState(null);

  const [notasMateriaDocente, setNotasMateriaDocente] = useState(null);
  const [notasMateriaAlumno, setNotasMateriaAlumno] = useState(null);

  const [allPeriodos, setAllPeriodos] = useState(null);

  useEffect(() => {
    if (url === "") return

    fetchAJAX({
      url: `${rutaBase}${url}`,
      resSuccess: (res) => {

        // console.log(res)

        if (res.success === true) {
          setDbUser(res.result);
          setError(null);
        } else {
          setDbUser(null);
          setError(res.message);
        }
        setLoading(false);
      },
      resError: (err) => {
        console.log(err);
      }
    })

  }, [url]);

  //Obtener datos 
  const getData = (url) => {
    fetchAJAX({
      url: `${rutaBase}${url}`,
      resSuccess: (res) => {
        if (res.success === true) {
          switch (url) {
            case 'selectAllAlumnos':
              setAllAlumnos(res.result);
              break;

            case 'selectAllUsuarios':
              setAllUsuarios(res.result);
              break;

            case 'selectAllPeriodos':
              setAllPeriodos(res.result);
              break;

            case 'selectAllMaterias':
              setAllMaterias(res.result);
              break;

            case 'selectAllDocentes':
              setAllDocentes(res.result);
              break;

            default:
              setNewData(res.result);
              break;
          }
          setError(null);
        } else {
          // setNewData(null);
          setError(res.message);
        }
      },
      resError: (err) => {
        console.log(err);
      }
    })
  };

  //Obtner
  const getOneData = (url, dato, nombre) => {
    // console.log(`${rutaBase}${url}/${dato}=${nombre}`);
    let options = {
      url: `${rutaBase}${url}/${dato}=${nombre}`,
      settings: {
        method: "GET",
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify(nombre)
      },
      resSuccess: (json => {
        switch (url) {
          case 'selectMateriaDocente':
            setDocenteMaterias(json.result);
            break;

          case 'selectDocente':
            setDocente(json.result);
            break;

          case 'selectMateria':
            setMateria(json.result);
            break;
          case 'selectMateriaID':
            setAlumnoMaterias(json.result);
            break;

          case 'selectNotaDocenteMateria':
            setNotasMateriaDocente(json.result);
            break;

          case 'selectNotaAlumnoMateria':
            setNotasMateriaAlumno(json.result);
            break;

          case 'selectAlumno':
            setAlumno(json.result)
            break;

          default:
            setNewData(json.result);
            break;
        }
        // return json.result;
      }),
      resError: (err => {
        console.log("Huvo un Error al Obtner el Registro", err)
      }),

    };

    fetchAJAX(options)
  }
  //autenticacion de usuario
  // useEffect(() => {
  //   const isAuthUser = window.localStorage.getItem('authUser');
  //   if (isAuthUser) {
  //     setAuthUser(isAuthUser);
  //   }
  // }, [authUser])


  //Rol del usuario actual
  const setRolConcurrentUser = (rol) => {
    setRolUser(rol);
    localStorage.setItem('authRol', rol);
  }

  //Usuario Auntenticado FrontEnd
  const handleAuth = (prop) => {
    // console.log(prop);
    setAuthUser(prop);
    localStorage.setItem('authUser', prop);
  };

  //Cerrar Sesion
  const handleCloseSesion = () => {
    fetchAJAX({
      url: `http://localhost:3001/deleteusuerauth`,
      resSuccess: (res) => {
        console.log(res);

        if (res.success !== false) {
          handleAuth('false');
          // localStorage.setItem('authUser', 'false');
          // setAuthUser(false);
          setNameUser('');
          setRolConcurrentUser('rol');
          localStorage.setItem('nameUser', '');
          localStorage.setItem('authRol', '');
          // window.location.reload();
          // handleAuth();
          // window.location.replace('/Welcome');
        }
      },
      resError: (err) => {
        setRolConcurrentUser('rol');
        // handleAuth();
        console.log(err);
      }
    })
  };

  //AGREGAR lo que sea
  const createData = (tabla, data) => {
    let options = {
      url: `${rutaBase}insertar${tabla}`,
      settings: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      },
      resSuccess: (json => {
        console.log(json)
        getData(`selectAll${tabla}`);
      }),
      resError: (err => {
        console.log("Huvo un Error al Insertar el Registro", err)
      }),

    };
    fetchAJAX(options)
  }

    //Actualizar Usuario
    const updateData = (tabla, data) => {
      let options = {
      url: `${rutaBase}update${tabla}`,
        settings: {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        },
        resSuccess: (json => {
          console.log(json)
          getData(`selectAll${tabla}`);
        }),
        resError: (err => {
          console.log("Huvo un Error al Actualizar el registro", err)
        }),
  
      };
  
      fetchAJAX(options)
    }



  // crear un Usuario
  const createUser = (data) => {
    const newUser = {
      id_usuario: data.id,
      nombre: data.Nombre,
      numero_telefono: data.Telefono,
      correo: data.Correo,
      rol: data.Rol,
      contrasena: data.Contrasena,
    };
    // console.log(newUser);
    fetchAJAX({
      url: 'http://localhost:5051/insertuser',
      settings: {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      },
      resSuccess: (res) => {
        if (res.success) {
          // setUrl('http://localhost:5051/selectusers');
          getData();
          window.alert(res.message);
        } else {
          window.alert(res.message);
        }

      },
      resError: (error) => {
        console.log(error);
      }
    })
  };

  //Eliminar Dispositivo
  const deleteDevice = (data) => {

    let endpoint = `http://localhost:5051/deletedevice/${data.id}`;

    let options = {
      url: endpoint,
      settings: {
        method: "DELETE",
      },
      resSuccess: (json => {
        json.success === true ?
          getData() :
          console.log(json);
      }),
      resError: (err => {
        console.log("Huvo un Error al Eliminar el Dispositivo", err)
      }),

    };

    fetchAJAX(options)
  }

  //Eliminar Usuario
  const deleteData = (data) => {

    let endpoint = `http://localhost:5051/deleteuser/${data.id}`;

    let options = {
      url: endpoint,
      settings: {
        method: "DELETE",
      },
      resSuccess: (json => {
        console.log(json)
      }),
      resError: (err => {
        console.log("Huvo un Error al Eliminar el Usuario", err)
      }),

    };

    fetchAJAX(options)
  }


  //Actualizar dispositivo
  const updateDevice = (url, data) => {
    let options = {
      url,
      settings: {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      },
      resSuccess: (json => {
        console.log(json)
        //Actualizar la tabla de dispositivos en tiempo real
        setUrl('http://localhost:5051/selectdevices');
        getData();
      }),
      resError: (err => {
        console.log("Huvo un Error al Actualizar el registro", err)
      }),

    };

    fetchAJAX(options)
  }


  //Actualizar Usuario
  const updateUser = (url, data) => {
    let options = {
      url,
      settings: {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      },
      resSuccess: (json => {
        console.log(json)
        //Actualizar la tabla de dispositivos en tiempo real
        setUrl('http://localhost:5051/selectusers');
        getData();
      }),
      resError: (err => {
        console.log("Huvo un Error al Actualizar el registro", err)
      }),

    };

    fetchAJAX(options)
  }



  const data = {
    setAuthUser,
    authUser,
    handleCloseSesion,
    rolUser,
    setRolUser,
    setRolConcurrentUser,
    handleAuth,
    // dataAllUser,
    dbUser,
    error,
    loading,
    updateData,
    deleteData,
    setDataToEdit,
    dataToEdit,
    createUser,
    setUrl,
    createData,
    deleteDevice,
    updateDevice,
    updateUser,
    setUserLogin,
    userLogin,
    nameUser,
    setNameUser,
    getData,
    setNewData,
    newData,
    getOneData,
    dataGet,
    docente,
    docenteMaterias,
    materia,
    notasMateriaDocente,
    notasMateriaAlumno,
    allAlumnos,
    alumno,
    alumnoMaterias,
    allUsuarios,
    allPeriodos,
    allMaterias,
    allDocentes,
    updateData
  };

  return (
    <StateContext.Provider value={data}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

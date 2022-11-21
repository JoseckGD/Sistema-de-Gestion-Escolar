import '../styles/StylesComponents/LoginForm.css';
import logoUser from '../img/user.png';
import { useStateContext } from '../contexts/ContextProvider';
import { useTitle } from '../hooks/useTitle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchAJAX from '../helpers/fetch';
import Message from '../components/loader message/Message';

// eslint-disable-next-line
import { Modal, Button, Text, Input, Row } from "@nextui-org/react";
import { AiOutlineEyeInvisible, AiOutlineEye, AiOutlineUser } from 'react-icons/ai';

const initialForm = {
  user: "",
  pass: "",
  rol: "",
};

export const LoginForm = ({ rol }) => {

  initialForm.rol = rol;

  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(null);
  const [messageError, setMessageError] = useState('');
  let pages = useNavigate();

  const { currentMode, handleAuth, setRolConcurrentUser, setNameUser } = useStateContext();
  //setRolConcurrentUser(rol);
  useTitle('Login ' + rol);

  //Auth - LogIn   PENDIENTE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user || !form.pass) {
      setError(true);
      setMessageError('Datos incompletos');
      setTimeout(() => {
        setError(false);
      }, 5000);
      return;
    } else {
      setNameUser(form.user);
      localStorage.setItem('nameUser', form.user);
      fetchAJAX({
        url: 'http://localhost:3001/selectuserauth',
        settings: {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        },
        resSuccess: (res) => {
          // console.log('prueba ', res);

          if (res.success) {
            setRolConcurrentUser(rol);
            handleAuth(true);
            window.localStorage.setItem('authUser', true);
            setError(false);
            setMessageError('');
            pages(`/${rol}`);
          } else {
            handleAuth(false);
            setError(true);
            setMessageError(res.message);
            window.alert(res.message)
            localStorage.setItem('nameUser', '');
          }

        },
        resError: (error) => {
          console.log('a');
          setError(true);
          setMessageError(error);
          // console.log('a', error);
          setTimeout(() => {
            setError(false);
          }, 10000);
        }
      })

    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
  };

  //=======================

  return (
    <>
      {/* {authUser === 'true' ? <Navigate to='/' /> : ( */}
      <>
        {error && <Message msg={messageError} bgColor={'#DC4C64'} />}
        <div className='Login'>
          <div className="seccion">
            <div className="card glass" style={{
              boxShadow: `0px 8px 32px 0 ${currentMode === 'Light' ? '#000000' : '#ffffff'}50`,
            }}>
              <div className="card-content">
                <div className="imagen">
                  <img src={logoUser} alt='logoUser' />
                </div>
                <div className="rol-Admin">
                  <h3>{rol}</h3>
                </div>

                <form onSubmit={handleSubmit} id="login-form" className='login-form'>
                  <div className="input-form in-Text">
                    <Input
                      contentRight={
                        <AiOutlineUser width="16" height="16" />
                      }
                      label="Usuario"
                      name="user"
                      value={form.user}
                      onChange={(e) => handleChange(e)}
                      clearable
                      fullWidth
                      size="md"
                      placeholder='Escriba su usuario'
                    />
                    {/* <label htmlFor="user" className="form-label">Usuario</label>
                    <input onChange={handleChange} type="text" className="form-control"
                      id="user" name="user" aria-describedby="emailHelp"
                      placeholder='Ingrese su usuario' value={form.user} /> */}
                  </div>
                  <div className="input-form in-pass">
                    <Input.Password

                      visibleIcon={<AiOutlineEye fill="currentColor" />}
                      hiddenIcon={< AiOutlineEyeInvisible fill="currentColor" />}
                      label="Contraseña"
                      // type="password"
                      name="pass"
                      value={form.pass}
                      onChange={(e) => handleChange(e)}
                      clearable
                      fullWidth
                      size="md"
                      placeholder='Escriba su contraseña'
                    />
                    {/* <label htmlFor="pass" className="form-label">Contraseña</label>
                    <input onChange={handleChange} type="password" className="form-control"
                      id="pass"
                      placeholder='Ingrese su contraseña' value={form.pass}
                      name="password"
                    /> */}
                  </div>
                  <p className="warn-auth">Error</p>
                  <Button
                    type='submit'
                    shadow
                    color="primary"
                  // // onPress={() => eventoDelete(el)}
                  // onPress={() => handleSubmit()}
                  >
                    Entrar
                  </Button>
                  {/* <button type="submit" className="btn-Submit">Entrar</button> */}
                </form>

              </div>
            </div>
          </div>
        </div>
      </>
      {/* )} */}
    </>
  )
}

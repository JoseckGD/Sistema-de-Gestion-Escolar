import React, { useEffect, useState } from 'react'
import { initialDataInfoDocente, labelDataInfoDocente } from '../data/DataInfoUser';
import { Button, Input, Spacer, Row } from "@nextui-org/react";
import { useStateContext } from '../contexts/ContextProvider';

export const InfoUsuario = ({ nombre, handleModify }) => {

    const { rolUser, infoDocente, getOneData } = useStateContext();

    useEffect(() => {
        getOneData(`selectInfo${rolUser}`, 'nombre', nombre);
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (infoDocente !== null) {
            // console.log(infoDocente);
            setForm(infoDocente[0]);
        }
        // eslint-disable-next-line
    }, [infoDocente])

    const [form, setForm] = useState(null);

    //Obtener los valores de los label para los formularios
    const getLabel = () => {
        switch (rolUser) {
            case 'Docente':
                return labelDataInfoDocente;

            //    case 'calificacion':
            //       return labelFormCalificacionModify;

            //    case 'periodos':
            //       return (tipo === 'Agregar' ? labelFormPeriodoAdd : labelFormPeriodoModify);

            default: return null;
        }
    }

    //Obtener los valores para guardar datos de los formularios
    const getInitialForm = () => {
        // console.log(title);
        switch (rolUser) {
            case 'Docente':
                return initialDataInfoDocente;

            //    case 'calificacion':
            //       return initialFormCalificacionModify;

            //    case 'periodos':
            //       return (tipo === 'Agregar' ? initialFormPeriodoAdd : initialFormPeriodoModify);

            default: return null;
        }
    }

    const handleChange = (e) => {
        // console.log(e.target.name, e.target.value)
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            {Object.keys(getInitialForm()).map((campo, index) => (
                index < Object.keys(getInitialForm()).length - 1 &&
                <Input
                    type={'text'}
                    label={Object.keys(getLabel())[index]}
                    name={campo}
                    value={form !== null && Object.values(form)[index]}
                    onChange={(e) => handleChange(e)}
                    key={index}
                    clearable
                    status="primary"
                    // bordered
                    fullWidth
                    color="primary"
                    size="md"
                    placeholder={Object.values(getLabel())[index]}
                />
            ))}
            <Spacer y={2} />

            <Row justify="center" align="center">

                <Button flat disabled auto color="warning">
                    Cambiar contraseña
                </Button>
                <Spacer y={1} />

                <Button auto shadow onPress={() => handleModify(form)}>
                    Actualizar tu Informacion
                </Button>
            </Row>
        </>
    )
}

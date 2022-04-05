import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import styled from "./contacto.module.scss";

import emailjs from "@emailjs/browser";
emailjs.init("user_sYZt8fgmDR0DX2zxnN0dQ");

export const Formulario = () => {
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          email: "",
          mensaje: "",
        }}
        validate={(valores) => {
          let errores = {};

          //   Validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Porfavor ingresa tu nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre es invalido.";
          }

          //   Validacion correo
          if (!valores.email) {
            errores.email = "Porfavor ingresa tu correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "El correo es invalido.";
          }

          //   Validacion mensaje
          if (!valores.mensaje) {
            errores.mensaje = "Porfavor ingresa un mensaje";
          } else if (valores.mensaje.length < 10) {
            errores.mensaje = "El mensaje es muy corto";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          cambiarFormularioEnviado(true);
          setTimeout(() => {
            cambiarFormularioEnviado(false);
          }, 5000);
          emailjs.send("gmail", "template_kle9qi5", {
            message: valores.mensaje,
            name: valores.nombre,
            email: valores.email,
          });
        }}
      >
        {({ errors }) => (
          <Form className={styled.formulario}>
            {formularioEnviado && (
              <p className={styled.success_submit}>
                Formulario enviado con exito! a la brevedad te voy a responder
                :)
              </p>
            )}
            <div className={styled.content_input + " " + styled.flex}>
              <div>
                <Field
                  type={"text"}
                  name="nombre"
                  placeholder={"Tu nombre"}
                  className={styled.nombre}
                />
                <ErrorMessage
                  name="nombre"
                  component={() => (
                    <h3 className={styled.error}>{errors.nombre}</h3>
                  )}
                />
              </div>
              <div>
                <Field
                  type={"email"}
                  name="email"
                  placeholder={"Tu email"}
                  className={styled.email}
                />
                <ErrorMessage
                  name="email"
                  component={() => (
                    <h3 className={styled.error}>{errors.email}</h3>
                  )}
                />
              </div>
            </div>

            <div className={styled.content_input}>
              <Field
                name="mensaje"
                as="textarea"
                placeholder="Mensaje"
                className={styled.textarea}
              />
              <ErrorMessage
                name="mensaje"
                component={() => (
                  <h3 className={styled.error}>{errors.mensaje}</h3>
                )}
              />
            </div>

            <div className={styled.content_input}>
              <button className={styled.btn_enviar} type="submit">
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

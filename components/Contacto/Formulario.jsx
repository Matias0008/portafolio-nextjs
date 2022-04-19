import React, { useState } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

import styled from "./contacto.module.scss";

import emailjs from "@emailjs/browser";
emailjs.init("user_sYZt8fgmDR0DX2zxnN0dQ");

export const Formulario = ({ lenguaje, leng }) => {
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
            errores.nombre = lenguaje.contacto.error_nombre;
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = lenguaje.contacto.nombre_invalido;
          }

          //   Validacion correo
          if (!valores.email) {
            errores.email = lenguaje.contacto.error_email;
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = lenguaje.contacto.email_invalido;
          }

          //   Validacion mensaje
          if (!valores.mensaje) {
            errores.mensaje = lenguaje.contacto.error_mensaje;
          } else if (valores.mensaje.length < 10) {
            errores.mensaje = lenguaje.contacto.mensaje_invalido;
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
                  placeholder={lenguaje.contacto.nombre}
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
                  placeholder={lenguaje.contacto.email}
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
                placeholder={lenguaje.contacto.mensaje}
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
                {leng === "es" ? "Enviar" : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

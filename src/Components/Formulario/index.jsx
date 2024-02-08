import React from "react";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
const YOUR_SERVICE_ID = "service_sjaritn";
const YOUR_TEMPLATE_ID = "template_bs46f1g";
const YOUR_USER_ID = "DMEF8cSmTjBogDrcA";

const SignupForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  function sendEmail(values) {
    emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, values, YOUR_USER_ID).then(
      (result) => {
        console.log(result.text);
        setIsOpen(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <div className="flex flex-col items-center justify-center bg-blue-400">
      <h1 className="mt-5 text-3xl font-bold font-raleway text-white">
        Contáctame
      </h1>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", message: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(20, "Debe tener 20 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Dirección de correo electrónico inválida")
            .required("Requerido"),
          message: Yup.string().required("Requerido"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          sendEmail(values);
          setSubmitting(false);
        }}
      >
        <Form className="flex flex-col mt-12 p-6 bg-indigo-500  rounded-xl shadow-3xl space-y-4 w-72">
          <label
            htmlFor="firstName"
            className="font-medium font-raleway text-white"
          >
            Nombre
          </label>
          <Field
            name="firstName"
            type="text"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="firstName" className="text-red-500" />

          <label
            htmlFor="lastName"
            className="font-medium font-raleway text-white"
          >
            Apellido
          </label>
          <Field
            name="lastName"
            type="text"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="lastName" className="text-red-500" />

          <label
            htmlFor="email"
            className="font-medium font-raleway text-white"
          >
            Correo Electrónico
          </label>
          <Field
            name="email"
            type="email"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="email" className="text-red-500" />

          <label
            htmlFor="message"
            className="font-medium font-raleway text-white"
          >
            Mensaje
          </label>
          <Field
            name="message"
            as="textarea"
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <ErrorMessage name="message" className="text-red-500" />

          <button
            type="submit"
            className="p-2 rounded-sm shadow-3xl font-raleway bg-blue-500 text-white mt-5 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Enviar
          </button>
        </Form>
      </Formik>
      {isOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203
            </span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-blue-500 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-xl mt-4 leading-6 font-bold font-poppins text-white"
                      id="modal-title"
                    >
                      !Muchas gracias!
                    </h3>
                    <div className="mt-8">
                      <p className="text-sm font-poppins text-white">
                        Te responderé lo antes posible
                      </p>
                    </div>
                  </div>
                  <div className="mt-72 w-48 h-48 text-center sm:mt-0 sm:ml-4 sm:text-right">
                    <img
                      src="../../../public/email.png"
                      alt="Descripción de la imagen"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-indigo-500 px-4 py-3 flex justify-center items-center sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full justify-center items-center rounded-md border border-transparent shadow-3xl px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignupForm;

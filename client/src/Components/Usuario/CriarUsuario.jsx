import * as yup from "yup";
import PropTypes from "prop-types";
import React from "react";
import { ErrorMessage, Formik, Form as FormikForm, Field } from "formik";
import { useDispatch } from "react-redux";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";
import './css/criarusuario.css';
import { addUser } from "../../Actions/userActions";

const validations = yup.object().shape({
  nomeUser: yup
    .string()
    .min(4, "Seu usuário deve conter ao menos 4 caracteres!")
    .required("Deve digitar um nome de usuário!"),
  emailUser: yup
    .string()
    .required("Digita o seu e-mail!")
    .email("Deve digitar um e-mail válido!"),
  senhaUser: yup
    .string()
    .min(8, "Sua senha deve contar ao menos 8 caracteres!")
    .required("Deve digitar uma senha!"),
});

const Form = ({ handleSubmit, initialValues }) => {
  const dispatch = useDispatch();
  function handleSubmit(values) {
    dispatch(addUser(values));
  }
  const cancelar = function (e) {
    window.location.replace("http://localhost:3000");
  };
  return (
    <Container id="criarusuario">
      <Image
        id="header"
        src="https://fotos.subefotos.com/97d96c5903bb437b451cff5d3f864f20o.png"
      ></Image>
      <div id="usuario">
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validations}
        >
          <FormikForm className="Form">
            <div className="form-group col-md-12">
              <h4>Criar Usuário</h4>
              <div className="Form-Group">
                <Field
                  className="Form-Field"
                  name="nomeUser"
                  placeholder="Nome de usuário"
                  type="text"
                />
                <ErrorMessage
                  name="nomeUser"
                  className="Form-Error"
                  component="span"
                />
              </div>
              <div className="Form-Group">
                <Field
                  className="Form-Field"
                  name="emailUser"
                  placeholder="E-mail"
                  type="email"
                />
                <ErrorMessage
                  name="emailUser"
                  className="Form-Error"
                  component="span"
                />
              </div>
              <div className="Form-Group">
                <Field
                  className="Form-Field"
                  name="senhaUser"
                  placeholder="Senha"
                  type="password"
                />
                <ErrorMessage
                  className="Form-Error"
                  component="span"
                  name="senhaUser"
                />
              </div>
              <div className="botoes1">
                <input
                  type="submit"
                  className="btn btn-outline-dark"
                  value="Criar Usuário"
                />
                <button
                  type="button"
                  className="btn btn-outline-light"
                  value="Cancelar"
                  onClick={cancelar}
                >
                  Cancelar
                </button>
              </div>
            </div>

         
          </FormikForm>
        </Formik>
      </div>      
    </Container>
  );
};

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object.isRequired,
};

export default Form;
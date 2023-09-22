import { Box, Grid, Button } from "@mui/material";
import * as styled from "./styles";
import Axios from "../../requests";
import { useState } from "react";
//? Database Models
import Patients from "../../database/models/patients";

import { Formik, Field, Form, useFormik, ErrorMessage } from "formik";
// import * as Yup from "yup";

import { patientValidationSchema } from "../../utils/yupValidations";

export function AddNewPatientComponent() {
  const [address, setAddress] = useState({ street: "" });
  async function getAddress() {
    const regex = /\d+/gm;
    const zipCode = document
      .getElementById("zip_code")
      .value.match(regex)
      .join("");

    if (!zipCode) {
      return;
    }

    console.log(zipCode);
    const data = await Axios.viaCep(zipCode);
    console.log(data);
    setAddress(data);
  }
  // CSS
  const { customStyle } = styled;

  async function createPatient(patient, address) {
    await Patients.create(patient, address);
  }

  const initialValues = {
    name: "",
    gender: "",
    birthday: "",
    cpf: "",
    rg: "",
    orgao: "",
    marital_status: "",
    phone: "",
    email: "",
    emergency_phone: "",
    allergies: "",
    zip_code: "",
    city: "",
    state: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    reference: "",
  };

  const onSubmit = (values) => {
    // console.log("formik values", values);
    createPatient(values, address);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={patientValidationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <Grid container>
          <Grid item xs={12}>
            <fieldset style={customStyle.fieldsetName}>
              <legend style={{ paddingLeft: "10px" }}>Nome Completo:</legend>

              <Field
                as="input"
                type="text"
                placeholder="Nome completo"
                name="name"
                style={customStyle.inputName}
              />
              <div style={customStyle.errorMessage}>
                <ErrorMessage name="name" />
              </div>
            </fieldset>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={6}>
                <fieldset style={customStyle.fieldsetGeneric}>
                  <legend style={{ paddingLeft: "10px" }}>Sexo:</legend>
                  <Field
                    as="select"
                    name="gender"
                    style={customStyle.inputSelect}
                  >
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                    <option value="transgenero">Transgenero</option>
                    <option value="outro">Outro</option>
                  </Field>
                  <div>
                    <ErrorMessage name="gender" />
                  </div>
                </fieldset>
              </Grid>
              <Grid item xs={6}>
                <fieldset style={customStyle.fieldsetGeneric}>
                  <legend>Nascimento:</legend>
                  <Field
                    type="date"
                    name="birthday"
                    style={customStyle.inputText}
                  />
                  <div>
                    <ErrorMessage name="birthday" />
                  </div>
                </fieldset>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <fieldset style={customStyle.fieldsetGeneric}>
                  <legend>CPF:</legend>
                  <Field
                    placeholder="cpf"
                    type="text"
                    name="cpf"
                    style={customStyle.inputText}
                  />
                  <div>
                    <ErrorMessage name="cpf" />
                  </div>
                </fieldset>
              </Grid>
              <Grid item xs={6}>
                <fieldset style={customStyle.fieldsetGeneric}>
                  <legend>Estado Civil:</legend>
                  <Field
                    as="select"
                    name="marital_status"
                    style={customStyle.inputSelect}
                  >
                    <option value="solteiro">Solteiro</option>
                    <option value="casado">Casado</option>
                    <option value="separado">Separado</option>
                    <option value="divorciado">Divorciado</option>
                    <option value="viuvo">Viúvo</option>
                  </Field>
                  <ErrorMessage name="marital_status" />
                </fieldset>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                <fieldset style={customStyle.fieldsetGeneric}>
                  <legend>RG:</legend>
                  <Field
                    placeholder="RG"
                    type="text"
                    name="rg"
                    style={customStyle.inputSelect}
                  />
                  <div>
                    <ErrorMessage name="rg" />
                  </div>
                </fieldset>
              </Grid>
              <Grid item xs={6}>
                <fieldset style={customStyle.fieldsetGeneric}>
                  <legend>Órgão:</legend>
                  <Field
                    type="text"
                    placeholder="Órgão"
                    name="orgao"
                    style={customStyle.inputText}
                  />
                  <ErrorMessage name="orgao" />
                </fieldset>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                {" "}
                <fieldset style={customStyle.fieldsetGeneric}>
                  <legend>Telefone: </legend>
                  <Field
                    name="phone"
                    type="number"
                    placeholder="(99) 9 9999-9999"
                    style={customStyle.inputText}
                  />
                  <ErrorMessage name="phone" />
                </fieldset>
              </Grid>
              <Grid item xs={6}>
                <fieldset style={customStyle.fieldsetGeneric}>
                  <legend>Telefone de Emergencia:</legend>
                  <Field
                    name="emergency_phone"
                    type="number"
                    placeholder="(99) 9 9999-9999"
                    style={customStyle.inputText}
                  />
                  <ErrorMessage name="emergency_phone" />
                </fieldset>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <fieldset style={customStyle.fieldsetGeneric}>
                <legend>E-mail:</legend>
                <Field
                  type="email"
                  name="email"
                  style={customStyle.inputText}
                />
                <ErrorMessage name="email" />
              </fieldset>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <fieldset style={customStyle.fieldsetTextArea}>
              <legend>Alergias:</legend>
              <Field as="textarea" name="allergies">
                {({ field, form, meta }) => {
                  return (
                    <textarea
                      style={{
                        height: "100%",
                        border: "none",
                        outline: "none",
                        resize: "none",
                      }}
                      col="30"
                      rows="20"
                      name="allergies"
                      value={field.value}
                      onChange={field.onChange}
                    />
                  );
                }}
              </Field>
              <div>As alergias devem ser separadas por virgula (,)</div>
              <div>
                <ErrorMessage name="allergies" />
              </div>
            </fieldset>
          </Grid>
          {/* <fieldset style={customStyle.fieldsetGeneric}>
            <legend></legend>
            <ErrorMessage name="" />
          </fieldset> */}

          <Grid item xs={12}>
            <Field
              type="text"
              placeholder="99888777"
              name="zip_code"
              id="zip_code"
            />

            <Field type="button" onClick={getAddress} value="buscar" />
            <Field
              name="street"
              type="text"
              placeholder={address.street || "Logradouro"}
              value={address.street || ""}
              readOnly
              disabled
            />
            <Field type="text" placeholder="Número" name="number" />
            <Field
              name="complement"
              type="text"
              placeholder="Complemento"
              title="Caso não haja um complemento deixe este campo em branco"
            />
            <Field
              name="neighborhood"
              type="text"
              placeholder={address.neighborhood || "Bairro"}
              value={address.neighborhood || "Bairro"}
              readOnly
              disabled
            />
            <Field
              type="text"
              placeholder={address.city || "Cidade"}
              name="city"
              readOnly
              disabled
            />
            <Field
              type="text"
              placeholder={address.state || "Estado"}
              readOnly
              name="state"
              disabled
            />
          </Grid>
          <Grid container>
            <Grid item xs={6}></Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "end",
              }}
            >
              {/* <Button variant="contained" color="info" onClick={createPatient}> */}
              <styled.Button type="submit" variant="contained" color="info">
                Cadastrar
              </styled.Button>
              <Button
                variant="outlined"
                disabled
                sx={{
                  margin: "0 10px",
                }}
              >
                Editar
              </Button>
              <styled.Button variant="outlined" disabled>
                Deletar
              </styled.Button>
            </Grid>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  );
}

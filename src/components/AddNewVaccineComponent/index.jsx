import { Box, Button } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as styled from "./styles";

import Vaccine from "../../database/models/vaccine";
import Patients from "../../database/models/patients";

import { vaccineValidationSchema } from "../../utils/yupValidations";
import { useEffect, useState } from "react";

export function AddNewVaccineComponent() {
  const [patients, setPatients] = useState();
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    async function getPatients() {
      setPatients(await Patients.findAll());
    }
    getPatients();
  }, []);
  const initialValues = {
    name: "",
    lab: "",
    date_applied_at: "",
    time_applied_at: "",
    ml_applied: "",
    obs: "",
  };

  const handleSearch = (event) => {
    if (!event.target.value) {
      setFiltered(null);
      return;
    }
    const filtered = patients.filter((patient) =>
      patient.name.toLowerCase().includes(event.target.value)
    );
    setFiltered(filtered);
  };

  const onSubmit = (values) => {
    const checkbox = document.querySelectorAll(
      "input[type='checkbox']:checked"
    );

    for (let input of checkbox) {
      const { dataset } = input;

      Vaccine.create({ ...values, ...dataset });
    }
  };

  return (
    <Box>
      <styled.ContainerInput>
        <styled.Input type="text" onChange={handleSearch} />
      </styled.ContainerInput>

      {filtered?.map((patient, index) => {
        return (
          <styled.ContainerList key={patient.cpf + index}>
            <input
              type="checkbox"
              data-patient_id={patient.id}
              data-patient_cpf={patient.cpf}
              data-patient_name={patient.name}
            />
            #{String(patient.id).padStart(4, "0")} {patient.name}
          </styled.ContainerList>
        );
      })}
      <Box>
        <Formik
          initialValues={initialValues}
          validationSchema={vaccineValidationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <styled.Container>
              <styled.FieldsetNames>
                <legend>Nome da Vacina:</legend>
                <Field name="name" type="text" />
                <div>
                  <ErrorMessage name="name" />
                </div>
              </styled.FieldsetNames>
              <styled.FieldsetNames>
                <legend>Laboratório da Vacina:</legend>
                <Field name="lab" type="text" />
                <div>
                  <ErrorMessage name="lab" />
                </div>
              </styled.FieldsetNames>
            </styled.Container>

            <styled.Container>
              <styled.FieldsetInfos>
                <legend>Data da Aplicação:</legend>
                <Field name="date_applied_at" type="date" />
                <div>
                  <ErrorMessage name="date_applied_at" />
                </div>
              </styled.FieldsetInfos>
              <styled.FieldsetInfos>
                <legend>Hora da Aplicação:</legend>
                <Field name="time_applied_at" type="time" />
                <div>
                  <ErrorMessage name="time_applied_at" />
                </div>
              </styled.FieldsetInfos>
              <styled.FieldsetInfos>
                <legend>Quantidade Aplicada:</legend>
                <Field name="ml_applied" type="number" />
                <div>
                  <ErrorMessage name="ml_applied" />
                </div>
              </styled.FieldsetInfos>
            </styled.Container>

            <styled.FieldsetTextArea>
              <legend>Observações:</legend>
              <Field as="textarea" name="obs" type="text" />
              <div>
                <ErrorMessage name="obs" />
              </div>
            </styled.FieldsetTextArea>
            <styled.ContainerButton>
              <Button type="submit" variant="contained" disabled>
                editar
              </Button>
              <Button type="submit" variant="contained" disabled>
                deletar
              </Button>
              <Button type="submit" variant="contained" color="success">
                Salvar
              </Button>
            </styled.ContainerButton>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
}

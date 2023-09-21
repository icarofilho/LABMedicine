import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import {
  StyledCardContainer,
  StyledFormContainer,
  StyledInput,
  StyledFieldset,
} from "./styles";

import Vaccines from "../../database/models/vaccine";

function BodyComponent({ patient, pos }) {
  const [vaccines, setVaccines] = useState(null);
  // console.log(vaccines);

  useEffect(() => {
    console.log("recarregou");
    (async () => {
      setVaccines(await Vaccines.findByCpf({ cpf: patient.cpf }));
    })();
  }, [pos]);
  return (
    <Box>
      <StyledFormContainer>
        <StyledFieldset>
          <legend>Dados pessoais</legend>
          <div>
            <label htmlFor="name">Nome:</label>
            <StyledInput
              type="text"
              value={patient.name}
              disabled
              name="name"
              size={patient.name?.length}
            />
          </div>

          <div>
            <label htmlFor="gender">Sexo:</label>
            <StyledInput
              type="text"
              value={patient.gender}
              disabled
              name="gender"
              size={patient.gender?.length}
            />
          </div>
          <div>
            <label htmlFor="marital_status">Estado Civil:</label>
            <StyledInput
              type="text"
              value={patient.marital_status}
              disabled
              name="marital_status"
              size={patient.marital_status?.length}
            />
          </div>
          <div>
            <label htmlFor="cpf">CPF:</label>
            <StyledInput
              type="text"
              value={patient.cpf}
              disabled
              name="cpf"
              size={patient.cpf?.length}
            />
          </div>
          <div>
            <label htmlFor="rg">RG:</label>
            <StyledInput
              type="text"
              value={patient.rg}
              disabled
              name="rg"
              size={patient.rg?.length}
            />
          </div>
        </StyledFieldset>
        <StyledFieldset>
          <legend>Contato:</legend>
          <div>
            <label htmlFor="phone">Telefone:</label>
            <StyledInput
              type="text"
              value={patient.phone}
              disabled
              name="phone"
              size={patient.phone?.length}
            />
          </div>
          <div>
            <label htmlFor="emergency_phone">Contato de Emergencia:</label>
            <StyledInput
              type="text"
              value={patient.emergency_phone}
              disabled
              name="emergency_phone"
              size={patient.emergency_phone?.length}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <StyledInput
              type="text"
              value={patient.email}
              disabled
              name="email"
              size={patient.email?.length}
            />
          </div>
        </StyledFieldset>
        <StyledFieldset>
          <legend>Alergias:</legend>
          <div>
            <label htmlFor="allergies"></label>
            <StyledInput
              type="text"
              value={
                patient.allergies.length > 0
                  ? patient.allergies.join(", ")
                  : "-"
              }
              disabled
              name="allergies"
              size={patient.allergies.reduce(
                (acc, word) => acc + word.length,
                0
              )}
            />
          </div>
        </StyledFieldset>
        <StyledFieldset>
          <legend>Dados de Endereço:</legend>
          <div>
            <label htmlFor="street">Rua:</label>
            <StyledInput
              type="text"
              value={patient.address.street}
              disabled
              name="street"
              size={patient.address.street?.length}
            />
          </div>
          <div>
            <label htmlFor="number">Número:</label>
            <StyledInput
              type="text"
              value={patient.address.number}
              disabled
              name="number"
              size={patient.address.number?.length}
            />
          </div>
          {patient.address?.complement && (
            <div>
              <label htmlFor="complement">Complemento:</label>
              <StyledInput
                size={patient.address.complement?.length}
                type="text"
                value={patient.address.complement}
                disabled
                name="complement"
              />
            </div>
          )}

          <div>
            <label htmlFor="neighborhood">Bairro:</label>
            <StyledInput
              size={patient.address.neighborhood?.length}
              type="text"
              value={patient.address.neighborhood}
              disabled
              name="neighborhood"
            />
          </div>
          <div>
            <label htmlFor="city">Cidade:</label>
            <StyledInput
              size={patient.address.city?.length}
              type="text"
              value={patient.address.city}
              disabled
              name="city"
            />
          </div>
          <div>
            <label htmlFor="state">Estado:</label>
            <StyledInput
              size={patient.address.state?.length}
              type="text"
              value={patient.address.state}
              disabled
              name="state"
            />
          </div>
          <div>
            <label htmlFor="zipcode">Cep:</label>
            <StyledInput
              size={patient.address.zip_code?.length}
              type="text"
              value={patient.address.zip_code}
              disabled
              name="zipcode"
            />
          </div>
        </StyledFieldset>
        <StyledFieldset>
          {vaccines?.map((v, i) => {
            return (
              <StyledCardContainer key={v.id + i}>
                <div>
                  <label htmlFor="vname">Nome: </label>
                  <input type="text" value={v.name} disabled name="vname" />
                </div>
                <div>
                  <label htmlFor="lab">Laboratório:: </label>
                  <input type="text" value={v.lab} disabled name="lab" />
                </div>
                <div>
                  <label htmlFor="ml">Quantidade aplicada:</label>
                  <input
                    type="text"
                    value={`${v.ml_applied} ml`}
                    disabled
                    name="ml"
                  />
                </div>
                <div>
                  <label htmlFor="data-aplicacao">Data da aplicação:</label>
                  <input
                    type="date"
                    value={v.date_applied_at}
                    disabled
                    name="data-aplicacao"
                  />
                </div>
              </StyledCardContainer>
            );
          })}
          <legend>Histórico de Vacinação:</legend>
        </StyledFieldset>
      </StyledFormContainer>
    </Box>
  );
}

BodyComponent.propTypes = {
  patient: PropTypes.shape({
    name: PropTypes.string,
    cpf: PropTypes.string,
    marital_status: PropTypes.string,
    gender: PropTypes.string,
    rg: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    emergency_phone: PropTypes.string,
    allergies: PropTypes.oneOfType([PropTypes.array]),
    address: PropTypes.shape({
      zip_code: PropTypes.string,
      street: PropTypes.string,
      city: PropTypes.string,
      neighborhood: PropTypes.string,
      state: PropTypes.string,
      number: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      complement: PropTypes.string,
    }),
  }),
  vaccines: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  pos: PropTypes.number,
};

export default BodyComponent;

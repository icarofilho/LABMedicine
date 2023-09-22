import { Button, Box } from "@mui/material";
import {
  StyledInput,
  StyledButtonContainer,
  StyledCardContainer,
  StyledSearchContainer,
} from "./styles";
// import Vaccine from "../../database/models/vaccine";
import Patients from "../../database/models/patients";
import { useEffect, useState } from "react";
import ModalPatientVaccineComponent from "./ModalPatientVaccineComponent";

export function VacinationHistoryComponent() {
  const [isModalOpen, setModalOpen] = useState(false);
  // const [payload, setPayload] = useState({});

  const [select, setSelect] = useState("name");
  const [patients, setPatients] = useState(null);
  const [filteredPatients, setFilteredPatients] = useState(null);

  useEffect(() => {
    (async () => {
      setPatients(await Patients.findAll());
      setFilteredPatients(await Patients.findAll());
    })();
  }, []);

  const handleOpenModal = () => {
    // async function getpatient() {
    //   const [dataPatient] = await Patients.findOne({ cpf: e.target.value });
    //   console.log(dataPatient);
    //   setPayload(dataPatient);
    // }
    // getpatient();
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  const handleSearch = (event) => {
    const e = event.target.value.toLowerCase();

    if (!e) {
      setFilteredPatients(patients);
      return;
    }
    const filtered = patients.filter((patient) =>
      patient[select].toLowerCase().includes(event.target.value)
    );
    setFilteredPatients(filtered);
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <Box>
      <StyledSearchContainer>
        <select onChange={handleSelect} defaultValue={select}>
          <option value="name">Nome</option>
          <option value="cpf">cpf</option>
        </select>
        <StyledInput
          onChange={handleSearch}
          placeholder="Busque por um paciente ..."
        />
      </StyledSearchContainer>
      <Box sx={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {filteredPatients?.map((patient, index) => {
          return (
            <StyledCardContainer key={patient.cpf + index}>
              <div>
                #{String(patient.id).padStart(4, "0")} {patient.name}
              </div>
              <StyledButtonContainer>
                <Button
                  size="small"
                  onClick={handleOpenModal}
                  value={patient.cpf}
                >
                  Detalhes
                </Button>
              </StyledButtonContainer>
            </StyledCardContainer>
          );
        })}
      </Box>
      {isModalOpen && (
        <ModalPatientVaccineComponent
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
        />
      )}
    </Box>
  );
}

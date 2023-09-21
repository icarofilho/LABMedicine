import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import Patients from "../../database/models/patients";
import Vaccines from "../../database/models/vaccine";

import BodyComponent from "./BodyComponent";

export function PatientHistory() {
  const [patients, setPatients] = useState(null);
  const [vaccines, setVaccines] = useState(null);
  const [pos, setPos] = useState(0);
  const [load, setLoad] = useState(0);

  useEffect(() => {
    (async function loadPatients() {
      await getPatients();
      setTimeout(async () => {
        await getVaccines();
      }, 3000);
    })();
    async function getPatients() {
      console.log("getPatients");
      setPatients(await Patients.findAll());
    }
    async function getVaccines() {
      console.log("getVaccines");
      setVaccines(await Vaccines.findByCpf({ cpf: patients[0]?.cpf }));
    }
  }, []);

  // useEffect(() => {
  //   (async function loadVacines() {
  //     console.log("load", load);
  //     if (load !== 0) {
  //       console.log("bateu");
  //       setVaccines(await Vaccines.findByCpf({ cpf: patients[pos]?.cpf }));
  //     }
  //   })();
  // }, [pos]);

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setPos(e.target.value);
    setLoad(1);
  };
  return (
    <Box>
      <div>
        <select onChange={handleOnChange}>
          {patients?.map((p, i) => {
            return (
              <option key={p.cpf + i} value={i}>
                {p.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        {patients && <BodyComponent patient={patients[pos]} pos={pos} />}
      </div>
    </Box>
  );
}

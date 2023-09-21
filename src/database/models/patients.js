import axios from "axios";

class Patients {
  async findAll() {
    const { data } = await axios.get(
      "http://localhost:3210/patients?_sort=name&_order=asc"
    );
    return data;
  }

  async findOne({ cpf, name }) {
    console.log("Patients");
    if (name) {
      const { data } = await axios.get(
        `http://localhost:3210/patients?name=${name}`
      );
      return data;
    }
    if (cpf) {
      const { data } = await axios.get(
        `http://localhost:3210/patients?cpf=${cpf}`
      );
      return data;
    }
  }

  async create(patient, address) {
    const payload = { ...patient, allergies: patient.allergies.split(",") };

    if (address) {
      payload.address = {
        ...address,
      };
    }
    await axios.post("http://localhost:3210/patients", payload);
  }
}

export default new Patients();

import axios from "axios";

class Patients {
  async findAll() {
    const { data } = await axios.get(
      "http://localhost:3210/patients?_sort=name&_order=asc"
    );
    return data;
  }

  async create(patient, address) {
    console.log("patient: ", patient);
    console.log("address: ", address);

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

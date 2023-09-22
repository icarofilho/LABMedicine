import axios from "axios";

class Vaccine {
  async findAll() {
    const { data } = await axios.get(
      "http://localhost:3210/vaccine?_sort=name&_order=asc"
    );
    return data;
  }

  async findByCpf({ cpf }) {
    console.log("cpf", cpf);
    const { data } = await axios.get(
      `http://localhost:3210/vaccine?patient_cpf=${cpf}`
    );
    return data;
  }

  async create(data) {
    const payload = { ...data };
    await axios.post("http://localhost:3210/vaccine", payload);
  }
}

export default new Vaccine();

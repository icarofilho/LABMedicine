import axios from "axios";

class Patients {
  async findAll() {
    const { data } = await axios.get(
      "http://localhost:3210/patients?_sort=name&_order=asc"
    );
    return data;
  }

  async create() {
    const payload = { name: "Icaro" };
    await axios.post("http://localhost:3210/patients", payload);
  }
}

export default new Patients();

import axios from "axios";

class Patients {
  async findAll() {
    const { data } = await axios.get("http://localhost:3210/patients");
  }
}

export default new Patients();

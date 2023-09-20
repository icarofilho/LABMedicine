import axios from "axios";

class Vaccine {
  async findAll() {
    // const { data } = await axios.get(
    //   "http://localhost:3210/patients?_sort=name&_order=asc"
    // );
    // return data;
  }

  async create(data) {
    const payload = { ...data };
    await axios.post("http://localhost:3210/vaccine", payload);
  }
}

export default new Vaccine();

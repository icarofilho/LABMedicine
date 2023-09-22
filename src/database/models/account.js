import axios from "axios";

class Account {
  async auth(email, password) {
    const { data } = await axios.get("http://localhost:3210/accounts");
    const findUser = data.find(
      (user) => user.email == email && user.password === password
    );
    if (findUser) {
      return true;
    }
    return false;
  }

  async create(email, password) {
    const payload = { email, password };
    await axios.post("http://localhost:3210/accounts", payload);
  }
}

export default new Account();

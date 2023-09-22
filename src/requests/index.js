import axios from "axios";

class Axios {
  get() {}
  async viaCep(zipCode) {
    const url = `https://viacep.com.br/ws/${zipCode}/json/`;
    const {
      data: { bairro, cep, localidade, logradouro, uf },
    } = await axios.get(url);
    return {
      neighborhood: bairro,
      zip_code: cep,
      city: localidade,
      street: logradouro,
      state: uf,
    };
  }
}

export default new Axios();

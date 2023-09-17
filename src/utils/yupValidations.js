import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .min(10, "Este campo não pode ter menos de 10 caracteres")
    .required("Campo nome obrigatório."),
  gender: Yup.string()
    .matches(/(masculino|feminino|transgenero|outro)/)
    .required("Campo sexo obrigatório."),
  birthday: Yup.date()
    .min(new Date("1900-12-12"), "Data invalida")
    .max(new Date(), "Data invalida")
    .required("Campo nascimento obrigatório."),
  cpf: Yup.string()
    .matches(
      /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/,
      "cpf invalido"
    )
    .required("Campo cpf obrigatório."),
  rg: Yup.string()
    .max(20, "Máximo 20 caracteres")
    .required("Campo rg obrigatório."),
  orgao: Yup.string()
    .max(20, "Máximo 20 caracteres")
    .required("Campo órgão obrigatório."),
  marital_status: Yup.string()
    .matches(/(solteiro|casado|separado|divorciado|viuvo)/)
    .required("Campo estado civil obrigatório."),
  phone: Yup.string().min(10).max(11).required("Campo Telefone obrigatório."),
  email: Yup.string().email("E  -mail invalido"),
  emergency_phone: Yup.string()
    .min(10)
    .max(11)
    .required("Campo Telefone obrigatório."),
  allergies: Yup.string().min(0).max(1000).required("Campo obrigatório"),
  zip_code: Yup.string(),
  city: Yup.string(),
  state: Yup.string(),
  street: Yup.string(),
  number: Yup.number(),
  complement: Yup.string(),
  neighborhood: Yup.string(),
  reference: Yup.string(),
});

import * as Yup from "yup";

export default Yup.object({
  nome: Yup.string()
    .max(25, "Nome precisa ter no máximo 25 caracteres")
    .required("Campo Obrigatório"),
  idade: Yup.number()
    .typeError("Favor informar valor numérico")
    .positive("Idade precisa ser maior que 0")
    .integer()
    .required("Idade é obrigatória"),
  password: Yup.string()
    .required("Senha obrigatória")
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      "Senha precisa conter 8 caracteres, um deles sendo maiúsculo, um número e um caracter especial"
    ),
  confirmPassword: Yup.string()
    .required("Por favor confirme sua senha!")
    .oneOf([Yup.ref("password"), null], "Senhas não conferem."),
});

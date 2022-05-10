import React from "react";
import { useFormik } from "formik";
import usuarioSchema from "../schemas/usuarioSchema";

export const LoginForm = () => {
  const { handleSubmit, handleChange, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        nome: "",
        idade: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: usuarioSchema,
      onSubmit: ({ nome, idade, password }) => {
        alert(`nome: ${nome}, idade: ${idade}, password: ${password}`);
      },
    });

  return (
    <form
      className="flex flex-col relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
      onSubmit={handleSubmit}
    >
      <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate pb-3">
        Validação com FORMIK
      </h1>

      <div className="pb-3">
        <label
          htmlFor="nome"
          className="block text-sm font-medium text-gray-700"
        >
          Nome
        </label>
        <input
          className="px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
          value={values.nome}
          onChange={handleChange}
          onBlur={handleBlur}
          id="nome"
          name="nome"
          type="text"
        />
        {touched.nome && errors.nome ? <div>{errors.nome}</div> : null}
      </div>

      <div className="pb-3">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="idade"
        >
          Idade
        </label>
        <input
          className="px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
          value={values.idade}
          onChange={handleChange}
          onBlur={handleBlur}
          id="idade"
          name="idade"
          type="text"
        />
        {touched.idade && errors.idade ? <div>{errors.idade}</div> : null}
      </div>

      <div className="pb-3">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          Senha
        </label>
        <input
          className="px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
          name="password"
          type="password"
        />
        {touched.password && errors.password ? (
          <div>{errors.password}</div>
        ) : null}
      </div>

      <div className="pb-3">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="confirmPassword"
        >
          Confirme Senha
        </label>
        <input
          className="px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
        />
        {touched.confirmPassword && errors.confirmPassword ? (
          <div>{errors.confirmPassword}</div>
        ) : null}
      </div>
      <button className="text-sky-500 hover:text-sky-600" type="submit">
        Enviar
      </button>
    </form>
  );
};

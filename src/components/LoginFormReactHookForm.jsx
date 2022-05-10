import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import usuarioSchema from "../schemas/usuarioSchema";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(usuarioSchema),
  });

  const onSubmit = ({ nome, idade, password }) => {
    alert(`nome: ${nome}, idade: ${idade}, password: ${password}`);
  };

  return (
    <form
      className="flex flex-col relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate pb-3">
        Validação com REACT HOOK FORM
      </h1>

      <div className="pb-3">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="nome"
        >
          Nome
        </label>
        <input
          className="px-3 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
          {...register("nome")}
          id="nome"
          name="nome"
          type="text"
        />
        {errors.nome && <div>{errors.nome.message}</div>}
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
          {...register("idade")}
          id="idade"
          name="idade"
          type="text"
        />
        {errors.idade && <div>{errors.idade.message}</div>}
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
          {...register("password")}
          id="password"
          name="password"
          type="password"
        />
        {errors.password && <div>{errors.password.message}</div>}
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
          {...register("confirmPassword")}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
        />
        {errors.confirmPassword && <div>{errors.confirmPassword.message}</div>}
      </div>
      <button className="text-sky-500 hover:text-sky-600" type="submit">
        Enviar
      </button>
    </form>
  );
};

import { useState } from "react";
import "./assets/styles/App.css";

import { LoginForm as FormHook } from "./components/LoginFormReactHookForm";
import { LoginForm as FormFormik } from "./components/LoginFormFormik";

const validatorType = {
  hook: <FormHook />,
  formik: <FormFormik />,
  none: "",
};

function App() {
  const [validator, setValidator] = useState(validatorType.none);

  const newValidatorType = (validator) => setValidator(() => validator);

  if (!validator) {
    return (
      <>
        <section className="flex items-center flex-col py-20">
          <div>
            <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:text-2xl sm:truncate pb-3">
              Qual componente deseja renderizar?
            </h1>
          </div>
          <div className="flex align-center align-center">
            <div
              className="mt-2 flex items-center text-sm text-sky-500 hover:text-sky-600 px-5 cursor-pointer"
              onClick={() => newValidatorType(validatorType.formik)}
            >
              <svg
                class="-ml-1 mr-2 h-5 w-5 text-sky-500 hover:text-sky-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Formik
            </div>
            <div
              className="mt-2 flex items-center text-sm text-sky-500 hover:text-sky-600 cursor-pointer"
              onClick={() => newValidatorType(validatorType.hook)}
            >
              <svg
                class="-ml-1 mr-2 h-5 w-5 text-sky-500 hover:text-sky-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              React Hook Form
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <section className="flex items-center flex-col py-5">
        <button className="mt-2 flex items-center text-sm text-sky-500 hover:text-sky-600" onClick={() => newValidatorType(validatorType.none)}>
          Voltar
        </button>
      </section>
      {validator}
    </>
  );
}

export default App;

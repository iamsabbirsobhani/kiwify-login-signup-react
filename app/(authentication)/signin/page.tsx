"use client";
import { useState } from "react";

export default function SignIn() {
  //   Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Errors
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
    setEmailError(null);
  };

  const handleEmailBlur = () => {
    if (!email) {
      setEmailError("Esse campo é obrigatório");
    } else {
      setEmailError(null);
    }
  };

  const handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    setPasswordError(null);
  };

  const handlePasswordBlur = () => {
    if (!password) {
      setPasswordError("Esse campo é obrigatório");
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let emailError: string | null = null;
    let passwordError: string | null = null;

    if (!email) {
      emailError = "Esse campo é obrigatório";
    }
    if (!password) {
      passwordError = "Esse campo é obrigatório";
    }

    if (emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      return;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
            E-mail
          </label>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none ${
                emailError ? " border-red-500 " : " border-gray-300 "
              } w-full`}
            />

            {emailError && (
              <div className="text-red-600 text-xs mt-2">{emailError}</div>
            )}
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium leading-5 text-gray-700">
            Senha
          </label>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              className={`form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none  ${
                passwordError ? " border-red-500 " : ""
              } w-full`}
            />

            {passwordError && (
              <div className="text-red-600 text-xs mt-2">{passwordError}</div>
            )}
          </div>
        </div>
        <div className="mt-2 flex items-center justify-end">
          <div className="text-sm leading-5">
            <a
              href="/ResetPassword"
              className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none  focus:underline transition ease-in-out duration-150"
            >
              Esqueceu a senha?
            </a>
          </div>
        </div>
        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500  focus:shadow-outline-indigo active:bg-indigo-800 transition duration-150 ease-in-out focus:border-indigo-700 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
            >
              Entrar
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function SignupForm() {
  // Fields
  const [email, setEmail] = useState("");
  const [repeatEmail, setRepeatEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailFieldTouched, setEmailFieldTouched] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  // Errors
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [repeatEmailError, setRepeatEmailError] = useState<string | null>(null);
  const [agreedToTermsError, setAgreedToTermsError] = useState<string | null>(
    null
  );

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
    setEmailError(null);
  };

  const handleEmailBlur = () => {
    setEmailFieldTouched(true);
    if (!email) {
      setEmailError("Esse campo é obrigatório");
    }
  };

  const handleRepeatEmailChange = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    setRepeatEmail(event.currentTarget.value);
    setRepeatEmailError(null);
  };

  const handleRepeatEmailBlur = () => {
    setEmailFieldTouched(true);
    if (!repeatEmail) {
      setRepeatEmailError("Esse campo é obrigatório");
    } else if (email !== repeatEmail) {
      setRepeatEmailError("Os dois e-mails devem ser iguais.");
    } else {
      setRepeatEmailError(null);
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

  const handleAgreedToTermsChange = () => {
    setAgreedToTerms(!agreedToTerms);
    setAgreedToTermsError(null);
  };

  const handleAgreedToTermsBlur = () => {
    if (!agreedToTerms) {
      setAgreedToTermsError("(Esse campo é obrigatório)");
    } else {
      setAgreedToTermsError(null);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate email and password
    let emailError: string | null = null;
    let passwordError: string | null = null;
    let agreedToTermsError: string | null = null;

    if (!email) {
      emailError = "E-mail é obrigatório";
    }

    if (!repeatEmail) {
      emailError = "Repetir e-mail é obrigatório";
    }

    if (email !== repeatEmail) {
      emailError = "Os dois e-mails devem ser iguais.";
    }

    if (!password) {
      passwordError = "Senha é obrigatória";
    }

    if (!agreedToTerms) {
      agreedToTermsError = "(Esse campo é obrigatório)";
    }

    if (emailError || passwordError) {
      setEmailError(emailError);
      setPasswordError(passwordError);
      setAgreedToTermsError(agreedToTermsError);
      setRepeatEmailError(emailError);
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-sm font-medium leading-5 mb-1 text-gray-700"
          htmlFor="email"
        >
          E-mail
        </label>
        <input
          type="email"
          autoComplete="off"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          className={`form-input block py-2 px-3 border ${
            emailError ? "border-red-500" : "border-gray-300"
          } form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none w-full`}
        />
        {emailFieldTouched && emailError && (
          <div className="text-red-600 text-xs mt-2">{emailError}</div>
        )}
        {!emailFieldTouched && emailError && (
          <div className="text-red-600 text-xs mt-2">{emailError}</div>
        )}
      </div>
      <div className="mt-6">
        <label
          htmlFor="repeat-email"
          className="block text-sm font-medium leading-5 mb-1 text-gray-700"
        >
          Repetir e-mail
        </label>
        <div>
          <input
            type="email"
            autoComplete="off"
            id="repeat-email"
            name="repeat-email"
            value={repeatEmail}
            onChange={handleRepeatEmailChange}
            onBlur={handleRepeatEmailBlur}
            className={`form-input block py-2 px-3 border ${
              emailError ? "border-red-500" : "border-gray-300"
            } form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none w-full`}
          />
          {emailFieldTouched && repeatEmailError && (
            <div className="text-red-600 text-xs mt-2">{repeatEmailError}</div>
          )}
          {!emailFieldTouched && repeatEmailError && (
            <div className="text-red-600 text-xs mt-2">{repeatEmailError}</div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-5 text-gray-700"
        >
          Senha
        </label>
        <div className="mt-1 rounded-md shadow-sm">
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            autoComplete="new-password"
            className={`form-input block py-2 px-3 border ${
              passwordError ? "border-red-500" : "border-gray-300"
            } form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5 focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none w-full`}
          />
          {passwordError && (
            <div className="text-red-600 text-xs mt-2">{passwordError}</div>
          )}
        </div>
      </div>
      <div className="mt-6">
        <label className="relative flex items-start mt-2">
          <div className="flex items-center h-5">
            <input
              id="agreed-to-terms"
              name="agreed-to-terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={handleAgreedToTermsChange}
              onBlur={handleAgreedToTermsBlur}
              className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            />
          </div>

          <div className="ml-2 text-sm leading-5">
            <span className="font-medium text-gray-700">
              Eu li e aceito os&nbsp;
              <Link
                href="https://kiwify.com.br/termos-de-uso"
                className=" underline"
              >
                termos de uso
              </Link>
              , &nbsp;
              <Link
                href="https://kiwify.com.br/licenca-de-uso-software"
                className=" underline"
              >
                termos de licença de uso de software
              </Link>
              , &nbsp;e&nbsp;
              <Link
                href="https://kiwify.com.br/politica-de-conteudo"
                className=" underline"
              >
                política de conteúdo
              </Link>
              &nbsp;da Kiwify.
            </span>
          </div>
        </label>
        {agreedToTermsError && (
          <div className="text-red-600 text-xs mt-2">{agreedToTermsError}</div>
        )}
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500  focus:shadow-outline-indigo active:bg-indigo-800 transition duration-150 ease-in-out focus:border-indigo-700 focus:ring focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none"
        >
          Criar conta
        </button>
      </div>
    </form>
  );
}

import { I18nProvider, useI18n } from "@amoutonbrady/solid-i18n";
import { z } from "zod";
import { Component } from "solid-js";

export const dict = {
  en: {
    form: {
      signUp: "Sign Up",
      email: "Email",
      password: "Password",
      passwordConfirm: "Confirm Password",
      reset: "Reset",
    },
    validation: {
      wrongEmail: "Wrong Email",
      shortPassword: "Password must be at least 8 characters long",
      passwordMustMatch: "Password must match",
    },
  },
  pl: {
    form: {
      signUp: "Zarejestruj się",
      email: "Email",
      password: "Hasło",
      passwordConfirm: "Powtórz hasło",
      reset: "Resetuj",
    },
    validation: {
      wrongEmail: "Niepoprawny email",
      shortPassword: "Hasło musi mieć długość co najmniej 8 znaków",
      passwordMustMatch: "Hasło musi pasować",
    },
  },
};

const localStorageKey = "todo-app-language";
const language = z.enum(["en", "pl"]);

export const getLanguage = () => {
  const saved = language.safeParse(
    window.localStorage.getItem(localStorageKey) ||
      navigator.language.substring(0, 2)
  );

  return saved.success ? saved.data : "en";
};

export const createSetLanguage = () => {
  const [, { locale }] = useI18n();

  return (newLang: string) => {
    const lang = language.safeParse(newLang);
    if (lang.success) {
      window.localStorage.setItem(localStorageKey, lang.data);
      locale(lang.data);
    }
  };
};

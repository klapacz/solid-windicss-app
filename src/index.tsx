import "virtual:windi.css";

import { render } from "solid-js/web";
import { I18nProvider } from "@amoutonbrady/solid-i18n";

import { App } from "./App";

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

render(
  () => (
    <I18nProvider dict={dict} locale="pl">
      <App />
    </I18nProvider>
  ),
  document.getElementById("root") as HTMLDivElement
);

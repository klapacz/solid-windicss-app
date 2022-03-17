import { Component } from "solid-js";
import { TextField } from "../components/TextField";
import { createForm } from "@felte/solid";
import { validator } from "@felte/validator-zod";
import { reporter } from "@felte/reporter-solid";
import { Button } from "../components/Button";
import { FloatingForm } from "../components/FloatingForm";
import * as schemas from "../schemas";
import { useI18n } from "@amoutonbrady/solid-i18n";

export const Login: Component = () => {
  const [t] = useI18n();

  const { form } = createForm({
    onSubmit: async (values) => {
      console.log(values);
    },
    // HACK: validator doesn't accept `ZodEffects` type
    extend: [validator({ schema: schemas.login as any }), reporter],
  });

  return (
    <FloatingForm
      title={t("form.signUp")}
      form={form}
      actions={
        <>
          <Button type="reset" color="ghost">
            {t("form.reset")}
          </Button>
          <Button type="submit">{t("form.signUp")}</Button>
        </>
      }
    >
      <TextField type="email" label={t("form.email")} name="email" />
      <TextField type="password" label={t("form.password")} name="password" />
      <TextField
        type="password"
        label={t("form.passwordConfirm")}
        name="passwordConfirm"
      />
    </FloatingForm>
  );
};

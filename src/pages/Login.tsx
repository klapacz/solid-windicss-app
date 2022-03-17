import { Component } from "solid-js";
import { TextField } from "../components/TextField";
import { createForm } from "@felte/solid";
import { validator } from "@felte/validator-zod";
import { reporter } from "@felte/reporter-solid";
import { Button } from "../components/Button";
import { FloatingForm } from "../components/FloatingForm";
import * as schemas from "../schemas";

export const Login: Component = () => {
  const { form } = createForm({
    onSubmit: async (values) => {
      console.log(values);
    },
    // HACK: validator doesn't accept `ZodEffects` type
    extend: [validator({ schema: schemas.login as any }), reporter],
  });

  return (
    <FloatingForm
      title="Sign up"
      form={form}
      actions={
        <>
          <Button type="reset" color="ghost">
            Reset
          </Button>
          <Button type="submit">Sign up</Button>
        </>
      }
    >
      <TextField type="email" label="Email" name="email" />
      <TextField type="password" label="Password" name="password" />
      <TextField
        type="password"
        label="Confirm Password"
        name="passwordConfirm"
      />
    </FloatingForm>
  );
};

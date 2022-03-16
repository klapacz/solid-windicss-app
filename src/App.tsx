import { Component } from "solid-js";
import { TextField } from "./components/TextField";
import { createForm } from "@felte/solid";
import { validator } from "@felte/validator-zod";
import { reporter } from "@felte/reporter-solid";
import { z } from "zod";
import { Button } from "./components/Button";
import { FloatingForm } from "./components/FloatingForm";

const loginSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8),
    passwordConfirm: z.string(),
  })
  .refine((d) => d.password === d.passwordConfirm, {
    message: "password must match",
    path: ["passwordConfirm"],
  });

export const App: Component = () => {
  const { form } = createForm({
    onSubmit: async (values) => {
      console.log(values);
    },
    extend: [validator({ schema: loginSchema as any }), reporter],
  });

  return (
    <FloatingForm
      actions={
        <>
          <Button type="reset" color="ghost">
            Reset
          </Button>
          <Button type="submit">Sign up</Button>
        </>
      }
      title="Sign up"
      form={form}
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

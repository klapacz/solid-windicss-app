import { Component } from "solid-js";
import { JSX } from "solid-js";

export type FloatingFormProps = {
  actions: JSX.Element;
  title: string;
  form: (node: HTMLFormElement) => {
    destroy: () => void;
  };
};

export const FloatingForm: Component<FloatingFormProps> = (props) => (
  <div class="flex justify-center md:items-center bg-base-200 flex-1">
    <div class="card w-full max-w-md h-min m-4 bg-base-100 shadow">
      <form ref={props.form} class="card-body">
        <h1 class="card-title text-3xl">{props.title}</h1>
        {props.children}
        <div class="card-actions justify-end">{props.actions}</div>
      </form>
    </div>
  </div>
);

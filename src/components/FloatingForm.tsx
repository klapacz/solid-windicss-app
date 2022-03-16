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
  <div class="flex justify-center items-center h-screen bg-base-200">
    <div class="card w-96 bg-base-100 shadow-xl">
      <form ref={props.form} class="card-body">
        <h1 class="card-title text-3xl">{props.title}</h1>
        {props.children}
        <div class="card-actions justify-end">{props.actions}</div>
      </form>
    </div>
  </div>
);

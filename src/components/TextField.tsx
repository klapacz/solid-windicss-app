import { Component } from "solid-js";
import { ValidationMessage } from "@felte/reporter-solid";
import { useI18n } from "@amoutonbrady/solid-i18n";
import "./TextField.css";

type TextFieldProps = {
  type?: string;
  name: string;
  label: string;
};

export const TextField: Component<TextFieldProps> = (props) => {
  const [t] = useI18n();

  return (
    <div>
      <label for={props.name} class="label">
        <span class="label-text">{props.label}</span>
      </label>
      <input
        type={props.type || "text"}
        id={props.name}
        name={props.name}
        class="input input-bordered w-full"
      />
      <ValidationMessage for={props.name}>
        {(message) =>
          message && <span class="text-error">{t(message[0])}</span>
        }
      </ValidationMessage>
    </div>
  );
};

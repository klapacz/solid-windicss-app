import { useI18n } from "@amoutonbrady/solid-i18n";
import { Component, For } from "solid-js";
import TranslateIcon from "~icons/mdi/translate";
import { dict } from "..";

export type NavbarProps = {
  title: string;
};

const TranslationDropdown: Component = () => {
  const [, { locale }] = useI18n();

  return (
    <div class="dropdown dropdown-end">
      <label
        class="btn btn-ghost btn-circle hover:text-neutral-content"
        tabindex="0"
      >
        <TranslateIcon />
      </label>
      <ul
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        tabindex="0"
      >
        <For each={Object.keys(dict)}>
          {(lang) => (
            <li>
              <button onClick={locale.bind(this, lang)}>{lang}</button>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};

export const Navbar: Component<NavbarProps> = (props) => (
  <div class="navbar bg-base-100 shadow z-60">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl hover:text-neutral-content">
        {props.title}
      </a>
    </div>

    <div class="navbar-end">
      <TranslationDropdown />
    </div>
  </div>
);

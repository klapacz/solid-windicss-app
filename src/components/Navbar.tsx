import { Component } from "solid-js";

export type NavbarProps = {
  title: string;
};

export const Navbar: Component<NavbarProps> = (props) => (
  <div class="navbar bg-base-100 shadow z-60">
    <a class="btn btn-ghost normal-case text-xl hover:text-neutral-content">
      {props.title}
    </a>
  </div>
);

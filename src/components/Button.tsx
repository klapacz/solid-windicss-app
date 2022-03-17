import { Component } from "solid-js";

export type ButtonProps = {
	type?: "reset" | "submit";
	color?: "ghost";
};

export const Button: Component<ButtonProps> = (props) => (
	<button
		type={props.type || "button"}
		class="btn"
		classList={{
			"btn-primary": !props.color,
			"btn-ghost": props.color === "ghost",
			"hover:text-neutral-content": props.color === "ghost",
		}}
	>
		{props.children}
	</button>
);

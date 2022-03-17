import { useI18n } from "@amoutonbrady/solid-i18n";
import { Link } from "solid-app-router";
import { Component, For } from "solid-js";
import TranslateIcon from "~icons/mdi/translate";
import { data, createSetLanguage } from "../i18n";

export type NavbarProps = {
	title: string;
};

const TranslationDropdown: Component = () => {
	const setLanguage = createSetLanguage();
	const [, { locale }] = useI18n();

	return (
		<div class="dropdown dropdown-end">
			<label class="btn btn-ghost btn-circle hover:text-neutral-content" tabindex="0">
				<TranslateIcon />
			</label>
			<ul
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				tabindex="0"
			>
				<For each={Object.entries(data)}>
					{([lang, { icon, name }]) => (
						<li>
							<button
								onClick={() => setLanguage(lang)}
								classList={{
									active: locale() === lang,
								}}
							>
								{icon}
								{name}
							</button>
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
			<Link href="/" class="btn btn-ghost normal-case text-xl hover:text-neutral-content">
				{props.title}
			</Link>
		</div>

		<div class="navbar-end">
			<TranslationDropdown />
		</div>
	</div>
);

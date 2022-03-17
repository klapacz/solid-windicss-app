import "virtual:windi.css";

import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import { App } from "./App";
import { dict, getLanguage } from "./i18n";
import { I18nProvider } from "@amoutonbrady/solid-i18n";

render(
	() => (
		<I18nProvider dict={dict} locale={getLanguage()}>
			<Router base={import.meta.env.BASE_URL}>
				<App />
			</Router>
		</I18nProvider>
	),
	document.getElementById("root") as HTMLDivElement
);

import { useRoutes } from "solid-app-router";
import { Component } from "solid-js";
import { Navbar } from "./components/Navbar";
import { routes } from "./routes";

export const App: Component = () => {
	const Routes = useRoutes(routes);

	return (
		<div class="min-h-screen flex flex-col">
			<Navbar title="Brand" />
			<div class="flex-1 flex flex-col bg-base-200">
				<Routes />
			</div>
		</div>
	);
};

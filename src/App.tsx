import { Component } from "solid-js";
import { Navbar } from "./components/Navbar";
import { Login } from "./pages/Login";

export const App: Component = () => {
  return (
    <div class="min-h-screen flex flex-col">
      <Navbar title="Brand" />
      <div class="flex-1 flex flex-col">
        <Login />
      </div>
    </div>
  );
};

import { Link } from "solid-app-router";
import { Login } from "./pages/Login";

export const routes = [
  {
    path: "/",
    component: () => (
      <div class="flex justify-center items-center flex-1">
        <Link href="/login" class="btn btn-primary">
          Login
        </Link>
      </div>
    ),
  },

  {
    path: "/login",
    component: () => <Login />,
  },
];

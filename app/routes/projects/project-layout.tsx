// root.tsx-like layout component/route for projects & projects/:pid and projects/:pid/edit as configured in routes.ts
import { Outlet } from "react-router";

export default function ProjectsProjectLayout() {
  return (
    <div>
      <h1>Projects Project Layout Route</h1>
      <br />
      <h1>Outlet</h1>
      <br />
      <Outlet />
    </div>
  );
}

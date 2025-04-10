import { Outlet } from "react-router";
import { NavBar } from "~/components/layout/NavBar";

export default function AppLayout() {
  return (
    <>
      {/* <NavBar /> */}

      <main className="px-6">
        <Outlet />
      </main>
    </>
  );
}

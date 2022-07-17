import { Outlet } from "react-router-dom";

import { NavbarUser } from "./NavbarUser";

export const LayoutUser = () => {
  return (
    <div>
      <NavbarUser />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

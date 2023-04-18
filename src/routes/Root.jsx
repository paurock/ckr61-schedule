import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Store from "../model/store";
import Menu from "../components/Menu";

export default function Root() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("muzclass");
  }, []);
  return (
    <>
      <Menu />
      <Store>
        <Outlet />
      </Store>
    </>
  );
}

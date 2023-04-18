import React, { useContext, useEffect } from "react";
import Table from "../components/Table";
import { StoreContext } from "../model/store";

const Muzclass = () => {
  const { setRoomNumber } = useContext(StoreContext);
  useEffect(() => {
    setRoomNumber("219");
  }, []);
  return <Table roomNumber={"219"} />;
};

export default Muzclass;

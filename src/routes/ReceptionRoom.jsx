import React, { useContext, useEffect } from "react";
import Table from "../components/Table";
import { StoreContext } from "../model/store";

const ReceptionRoom = () => {
  const { setRoomNumber } = useContext(StoreContext);
  useEffect(() => {
    setRoomNumber("106");
  }, []);
  return <Table roomNumber={"106"} />;
};

export default ReceptionRoom;

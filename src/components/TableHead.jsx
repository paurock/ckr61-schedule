import React, { useContext } from "react";
import { StoreContext } from "../model/store";

const TableHead = () => {
  const { workDays, setWorkDays } = useContext(StoreContext);
  return (
    <thead>
      <tr>
        <th>Время</th>
        {workDays.map((item, i) => (
          <th key={i}>{item}</th>
        ))}
      </tr>
    </thead>
  );
};
export default TableHead;

import React, { useContext } from "react";
import BussinessLogic from "../model/model";
import TableHead from "./TableHead";
import Tr from "./Tr";
import { TimeStamp } from "./TimeStamp";

const Table = ({ roomNumber }) => {
  return (
    <BussinessLogic>
      <div className="container">
        <h1>{`Расписание кабинета ${roomNumber}`}</h1>
        <table>
          <TableHead />
          <Tr />
        </table>
        <TimeStamp />
      </div>
    </BussinessLogic>
  );
};

export default Table;

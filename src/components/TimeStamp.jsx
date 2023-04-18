import React, { useContext } from "react";
import { StoreContext } from "../model/store";

export const TimeStamp = () => {
  const { changeDate, changes } = useContext(StoreContext);

  return (
    <div className="timeStamp">
      Время последних изменений: {changeDate.toLocaleString()} <br />
      Изменения:{" "}
      {changes
        ? `изменяли ${changes.whatHourName} на ${
            changes.inputText ? changes.inputText : "стирание"
          }`
        : "нет"}
    </div>
  );
};

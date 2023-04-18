import React, { useState, createContext } from "react";
import { v4 } from "uuid";

export const StoreContext = createContext();

const Store = ({ children }) => {
  const [workDays, setWorkDays] = useState([
    "Пн",
    "Вт",
    "Ср",
    "Чт",
    "Пт",
    "Сб",
    "Вс"
  ]);

  const [firstHourFirstHalf, setFirstHourFirstHalf] = useState([
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);

  const [firstHourSecondHalf, setFirstHourSecondHalf] = useState([
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);

  const [secondHourFirstHalf, setSecondHourFirstHalf] = useState([
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);

  const [secondHourSecondHalf, setSecondHourSecondHalf] = useState([
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);

  const [thirdHourFirstHalf, setThirdHourFirstHalf] = useState([
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);

  const [thirdHourSecondHalf, setThirdHourSecondHalf] = useState([
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);

  const [fourthHourFirstHalf, setFourthHourFirstHalf] = useState([
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }],
    [{ name: "", id: v4() }]
  ]);

  const [fourthHourSecondHalf, setFourthHourSecondHalf] = useState([
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() }
  ]);

  const [fifthHourFirstHalf, setFifthHourFirstHalf] = useState([
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() }
  ]);

  const [fifthHourSecondHalf, setFifthHourSecondHalf] = useState([
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() }
  ]);

  const [sixthHourFirstHalf, setSixthHourFirstHalf] = useState([
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() }
  ]);

  const [sixthHourSecondHalf, setSixthHourSecondHalf] = useState([
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() }
  ]);

  const [seventhHourFirstHalf, setSeventhHourFirstHalf] = useState([
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() }
  ]);

  const [seventhHourSecondHalf, setSeventhHourSecondHalf] = useState([
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() }
  ]);

  const [eighthHourFirstHalf, setEighthHourFirstHalf] = useState([
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() }
  ]);

  const [eighthHourSecondHalf, setEighthHourSecondHalf] = useState([
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() },
    { name: "", id: v4() }
  ]);

  const [roomNumber, setRoomNumber] = useState("219");

  const [changeDate, setChangeDate] = useState(new Date());

  const [changes, setChanges] = useState(null);

  const contextValues = {
    workDays,
    setWorkDays,
    firstHourFirstHalf,
    firstHourSecondHalf,
    secondHourFirstHalf,
    secondHourSecondHalf,
    thirdHourFirstHalf,
    thirdHourSecondHalf,
    fourthHourFirstHalf,
    fourthHourSecondHalf,
    fifthHourFirstHalf,
    fifthHourSecondHalf,
    sixthHourFirstHalf,
    sixthHourSecondHalf,
    seventhHourFirstHalf,
    seventhHourSecondHalf,
    eighthHourFirstHalf,
    eighthHourSecondHalf,
    setFirstHourFirstHalf,
    setFirstHourSecondHalf,
    setSecondHourFirstHalf,
    setSecondHourSecondHalf,
    setThirdHourFirstHalf,
    setThirdHourSecondHalf,
    setFourthHourFirstHalf,
    setFourthHourSecondHalf,
    setFifthHourFirstHalf,
    setFifthHourSecondHalf,
    setSixthHourFirstHalf,
    setSixthHourSecondHalf,
    setSeventhHourFirstHalf,
    setSeventhHourSecondHalf,
    setEighthHourFirstHalf,
    setEighthHourSecondHalf,
    roomNumber,
    setRoomNumber,
    changeDate,
    setChangeDate,
    changes,
    setChanges
  };

  return (
    <StoreContext.Provider value={contextValues}>
      {children}
    </StoreContext.Provider>
  );
};

export default Store;

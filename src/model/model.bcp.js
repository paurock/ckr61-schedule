import React, { createContext, useContext, useEffect, useState } from "react";
import { StoreContext } from "./store";
import { getDocRef, setDataFB } from "./dbConnect";

export const ModelContext = createContext();

const BussinessLogic = ({ children }) => {
  const { firstHour, setFirstHour } = useContext(StoreContext);
  const { secondHour, setSecondHour } = useContext(StoreContext);
  const { thirdHour, setThirdHour } = useContext(StoreContext);
  const { fourthHour, setFourthHour } = useContext(StoreContext);
  const { fifthHour, setFifthHour } = useContext(StoreContext);
  const { sixthHour, setSixthHour } = useContext(StoreContext);
  const { seventhHour, setSeventhHour } = useContext(StoreContext);
  const { eighthHour, setEighthHour } = useContext(StoreContext);
  const { roomNumber, setRoomNumber } = useContext(StoreContext);

  useEffect(() => {
    const docRef = getDocRef(roomNumber);

    //Load data from DB for each row separate loader
    return docRef.onSnapshot(
      (doc) => {
        //Check for a snapshot and converting data to state structure
        //[{},{}] => [[{}], [{}]]
        //this load and set first row of the table
        if (doc.data()["firstHour"]) {
          const convertedFirstHour = [...doc.data()["firstHour"]].map((it) => [
            it
          ]);

          setFirstHour(convertedFirstHour);
        }
        //this load and set 2d row of the table
        if (doc.data()["secondHour"]) {
          const convertedSecondHour = Object.values(
            doc.data()["secondHour"]
          ).map((it) => [it]);
          setSecondHour(convertedSecondHour);
        }
        //this load and set 3th row of the table
        if (doc.data()["thirdHour"]) {
          const convertedThirdHour = Object.values(
            doc.data()["thirdHour"]
          ).map((it) => [it]);
          setThirdHour(convertedThirdHour);
        }

        //this load and set 4th row of the table
        if (doc.data()["fourthHour"]) {
          const convertedFourthHour = Object.values(
            doc.data()["fourthHour"]
          ).map((it) => [it]);
          setFourthHour(convertedFourthHour);
        }

        //this load and set 5th row of the table
        if (doc.data()["fifthHour"]) {
          const convertedFifthHour = Object.values(
            doc.data()["fifthHour"]
          ).map((it) => [it]);
          setFifthHour(convertedFifthHour);
        }
        //this load and set 6th row of the table
        if (doc.data()["sixthHour"]) {
          const convertedSixthHour = Object.values(
            doc.data()["sixthHour"]
          ).map((it) => [it]);
          setSixthHour(convertedSixthHour);
        }

        //this load and set 7th row of the table
        if (doc.data()["seventhHour"]) {
          const convertedSeventhHour = Object.values(
            doc.data()["seventhHour"]
          ).map((it) => [it]);
          setSeventhHour(convertedSeventhHour);
        }

        //this load and set 8th row of the table
        if (doc.data()["eighthHour"]) {
          const convertedEighthHour = Object.values(
            doc.data()["eighthHour"]
          ).map((it) => [it]);
          setEighthHour(convertedEighthHour);
        }
        //end
      },
      (err) => console.log(err)
    );
  }, [roomNumber]);

  const writeDB = (newItem, newItemName) => setDataFB(newItemName, newItem);

  const handleChange = (e, id, whatHourObj, whatHourName, inputText) => {
    e.preventDefault();
    e.persist();
    const hourMapped = whatHourObj.map((arr) =>
      arr.map((obj) => (obj.id === id ? { name: inputText, id: id } : obj))
    );

    switch (whatHourName) {
      case "firstHour":
        setFirstHour(hourMapped);
        break;
      case "secondHour":
        setSecondHour(hourMapped);
        break;
      case "thirdHour":
        setThirdHour(hourMapped);
        break;
      case "fourthHour":
        setFourthHour(hourMapped);
        break;
      case "fifthHour":
        setFifthHour(hourMapped);
        break;
      case "sixthHour":
        setSixthHour(hourMapped);
        break;
      case "seventhHour":
        setSeventhHour(hourMapped);
        break;
      case "eighthHour":
        setEighthHour(hourMapped);
        break;
      default:
        console.log("No such switch case");
    }
  };

  return (
    <ModelContext.Provider value={{ handleChange, writeDB }}>
      {children}
    </ModelContext.Provider>
  );
};

export default BussinessLogic;

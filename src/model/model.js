import React, { createContext, useContext, useEffect } from "react";
import { v4 } from "uuid";

import { StoreContext } from "./store";
import { getDocRef, setDataFB } from "./dbConnect";

export const ModelContext = createContext();

const BussinessLogic = ({ children }) => {
  const {
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
    setChanges
  } = useContext(StoreContext);

  useEffect(() => {
    const convertHourData = (data) => {
      if (data) {
        return Object.values(data).map((it) => [it]);
      } else {
        return Array.from({ length: 7 }, () => [{ name: "", id: v4() }]);
      }
    };
    const docRef = getDocRef(roomNumber);

    const unsubscribe = docRef.onSnapshot(
      (doc) => {
        if (doc.exists) {
          setFirstHourFirstHalf(
            convertHourData(doc.data()["firstHourFirstHalf"])
          );
          setFirstHourSecondHalf(
            convertHourData(doc.data()["firstHourSecondHalf"])
          );
          setSecondHourFirstHalf(
            convertHourData(doc.data()["secondHourFirstHalf"])
          );
          setSecondHourSecondHalf(
            convertHourData(doc.data()["secondHourSecondHalf"])
          );
          setThirdHourFirstHalf(
            convertHourData(doc.data()["thirdHourFirstHalf"])
          );
          setThirdHourSecondHalf(
            convertHourData(doc.data()["thirdHourSecondHalf"])
          );
          setFourthHourFirstHalf(
            convertHourData(doc.data()["fourthHourFirstHalf"])
          );
          setFourthHourSecondHalf(
            convertHourData(doc.data()["fourthHourSecondHalf"])
          );
          setFifthHourFirstHalf(
            convertHourData(doc.data()["fifthHourFirstHalf"])
          );
          setFifthHourSecondHalf(
            convertHourData(doc.data()["fifthHourSecondHalf"])
          );
          setSixthHourFirstHalf(
            convertHourData(doc.data()["sixthHourFirstHalf"])
          );
          setSixthHourSecondHalf(
            convertHourData(doc.data()["sixthHourSecondHalf"])
          );
          setSeventhHourFirstHalf(
            convertHourData(doc.data()["seventhHourFirstHalf"])
          );
          setSeventhHourSecondHalf(
            convertHourData(doc.data()["seventhHourSecondHalf"])
          );
          setEighthHourFirstHalf(
            convertHourData(doc.data()["eighthHourFirstHalf"])
          );
          setEighthHourSecondHalf(
            convertHourData(doc.data()["eighthHourSecondHalf"])
          );
        } else {
          console.log("No such document!");
        }
      },
      (err) => console.log(err)
    );

    return () => {
      unsubscribe();
    };
  }, [roomNumber]);

  const writeDB = (newItem, newItemName) =>
    setDataFB(newItemName, newItem, roomNumber);

  const handleChange = (e, id, whatHourObj, whatHourName, inputText) => {
    e.preventDefault();
    e.persist();
    setChanges({ whatHourName, inputText });

    const hourMapped = whatHourObj.map((arr) =>
      arr.map((obj) => (obj.id === id ? { name: inputText, id: id } : obj))
    );

    const hourSetters = {
      firstHourFirstHalf: setFirstHourFirstHalf,
      firstHourSecondHalf: setFirstHourSecondHalf,
      secondHourFirstHalf: setSecondHourFirstHalf,
      secondHourSecondHalf: setSecondHourSecondHalf,
      thirdHourFirstHalf: setThirdHourFirstHalf,
      thirdHourSecondHalf: setThirdHourSecondHalf,
      fourthHourFirstHalf: setFourthHourFirstHalf,
      fourthHourSecondHalf: setFourthHourSecondHalf,
      fifthHourFirstHalf: setFifthHourFirstHalf,
      fifthHourSecondHalf: setFifthHourSecondHalf,
      sixthHourFirstHalf: setSixthHourFirstHalf,
      sixthHourSecondHalf: setSixthHourSecondHalf,
      seventhHourFirstHalf: setSeventhHourFirstHalf,
      seventhHourSecondHalf: setSeventhHourSecondHalf,
      eighthHourFirstHalf: setEighthHourFirstHalf,
      eighthHourSecondHalf: setEighthHourSecondHalf
    };

    const setHour = (whatHourName, hourMapped) => {
      const setter = hourSetters[whatHourName];
      if (setter) {
        setter(hourMapped);
      } else {
        console.log("No such setter for hour:", whatHourName);
      }
    };
    setHour(whatHourName, hourMapped);
  };

  return (
    <ModelContext.Provider value={{ handleChange, writeDB }}>
      {children}
    </ModelContext.Provider>
  );
};

export default BussinessLogic;

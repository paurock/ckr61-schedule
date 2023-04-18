import React, { useContext } from "react";
import Cell from "./Cell";
import { StoreContext } from "../model/store";
import { ModelContext } from "../model/model";

const Tr = () => {
  const {
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
    eighthHourSecondHalf
  } = useContext(StoreContext);

  const hours = [
    {
      time: "9:00-9:30",
      cells: firstHourFirstHalf,
      name: "firstHourFirstHalf"
    },
    {
      time: "9:30-10:00",
      cells: firstHourSecondHalf,
      name: "firstHourSecondHalf"
    },
    {
      time: "10:00-10:30",
      cells: secondHourFirstHalf,
      name: "secondHourFirstHalf"
    },
    {
      time: "10:30-11:00",
      cells: secondHourSecondHalf,
      name: "secondHourSecondHalf"
    },
    {
      time: "11:00-11:30",
      cells: thirdHourFirstHalf,
      name: "thirdHourFirstHalf"
    },
    {
      time: "11:30-12:00",
      cells: thirdHourSecondHalf,
      name: "thirdHourSecondHalf"
    },
    {
      time: "12:00-12:30",
      cells: fourthHourFirstHalf,
      name: "fourthHourFirstHalf"
    },
    {
      time: "12:30-13:00",
      cells: fourthHourSecondHalf,
      name: "fourthHourSecondHalf"
    },
    {
      time: "13:00-13:30",
      cells: fifthHourFirstHalf,
      name: "fifthHourFirstHalf"
    },
    {
      time: "13:30-14:00",
      cells: fifthHourSecondHalf,
      name: "fifthHourSecondHalf"
    },
    {
      time: "14:00-14:30",
      cells: sixthHourFirstHalf,
      name: "sixthHourFirstHalf"
    },
    {
      time: "14:30-15:00",
      cells: sixthHourSecondHalf,
      name: "sixthHourSecondHalf"
    },
    {
      time: "15:00-15:30",
      cells: seventhHourFirstHalf,
      name: "seventhHourFirstHalf"
    },
    {
      time: "15:30-16:00",
      cells: seventhHourSecondHalf,
      name: "seventhHourSecondHalf"
    },
    {
      time: "16:00-16:30",
      cells: eighthHourFirstHalf,
      name: "eighthHourFirstHalf"
    },
    {
      time: "16:30-17:00",
      cells: eighthHourSecondHalf,
      name: "eighthHourSecondHalf"
    }
  ];

  const { handleChange } = useContext(ModelContext);
  const { writeDB } = useContext(ModelContext);

  return (
    <tbody>
      {hours.map((hour) => {
        return (
          <tr key={hour.time}>
            <td className="hours-title">{hour.time}</td>
            {hour.cells.map((cell, i) => {
              return (
                <Cell
                  key={i}
                  cell={cell}
                  handleChange={handleChange}
                  whatHourObj={hour.cells}
                  whatHourName={hour.name}
                  writeDB={writeDB}
                />
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tr;

import React from "react";
import PropTypes from "prop-types";

const Cell = ({ cell, handleChange, whatHourObj, whatHourName, writeDB }) => {
  return (
    <td>
      <input
        name={cell.name}
        type="text"
        onFocus={(e) => {
          e.target.select();
        }}
        onBlur={() => writeDB(whatHourObj, whatHourName)}
        onChange={(e) => {
          const inputText = e.target.value;
          handleChange(e, cell.id, whatHourObj, whatHourName, inputText);
        }}
        value={cell.name}
      />
    </td>
  );
};

export default Cell;

Cell.propTypes = {
  cell: PropTypes.object,
  index: PropTypes.number,
  handleChange: PropTypes.func,
  whatHourObj: PropTypes.array,
  whatHourName: PropTypes.string,
  writeDB: PropTypes.func
};

import React from "react";
import {daysOfWeek, staffMembers} from "../constant";

const calculateLoad = (staff, schedule) => {
  return daysOfWeek.reduce((total, day) => {
    const slots = schedule[day] || {};
    return total + Object.values(slots).filter((s) => s === staff).length;
  }, 0);
};

const LoadTable = ({schedule}) => (
  <>
    <h1>Load</h1>
    <table>
      <thead>
        <tr>
          <th>Staff Member</th>
          {daysOfWeek.map((day) => (
            <th key={day}>{day}</th>
          ))}
          <th>Totals</th>
        </tr>
      </thead>
      <tbody>
        {staffMembers.map((staff) => (
          <tr key={staff}>
            <td>{staff}</td>
            {daysOfWeek.map((day) => (
              <td key={day}>{calculateLoad(staff, schedule)}</td>
            ))}
            <td>{calculateLoad(staff, schedule)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default LoadTable;

import React from "react";
import {daysOfWeek, timeSlots, staffMembers} from "../constant";

const ScheduleTable = ({schedule, assignStaff}) => (
  <>
    <h1>Schedule</h1>
    <table>
      <thead>
        <tr>
          <th></th>
          {daysOfWeek.map((day) => (
            <th key={day}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {timeSlots.map((timeSlot) => (
          <tr key={timeSlot}>
            <td>{timeSlot}</td>
            {daysOfWeek.map((day) => (
              <td key={day}>
                <select
                  onChange={(e) => assignStaff(day, timeSlot, e.target.value)}
                  value={schedule[day]?.[timeSlot] || ""}
                >
                  <option value="">Select Staff</option>
                  {staffMembers.map((staff) => (
                    <option key={staff} value={staff}>
                      {staff}
                    </option>
                  ))}
                </select>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>
);

export default ScheduleTable;

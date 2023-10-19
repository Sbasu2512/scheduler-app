import React, {useState} from "react";
import ScheduleTable from "./components/ScheduleTable";
import LoadTable from "./components/LoadTable";
import "./App.css";

function App() {
  const [schedule, setSchedule] = useState({}); // Initialize schedule as an empty object

  // Function to handle staff assignment
  const assignStaff = (day, timeSlot, staff) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [timeSlot]: staff,
      },
    }));
  };

  return (
    <div className="App">
      <ScheduleTable schedule={schedule} assignStaff={assignStaff} />
      <LoadTable schedule={schedule} />
    </div>
  );
}

export default App;

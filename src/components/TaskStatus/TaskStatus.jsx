import React from "react";
import SingleTaskStatus from "../SingleTaskStatus/SingleTaskStatus";

const TaskStatus = ({ textStatusTicket, handleResolvedTask }) => {
  console.log("textStatusTicket", textStatusTicket);

  return (
    <div className="space-y-5">
      {textStatusTicket.map((singleTaskStatus) => (
        <SingleTaskStatus
          key={singleTaskStatus.id}
          singleTaskStatus={singleTaskStatus}
          handleResolvedTask={handleResolvedTask}
        ></SingleTaskStatus>
      ))}
    </div>
  );
};

export default TaskStatus;

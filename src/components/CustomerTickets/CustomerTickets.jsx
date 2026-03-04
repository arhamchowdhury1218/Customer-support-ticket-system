import React, { use, useState } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const CustomerTickets = ({ loadCustomertickets, handleInProgressCount }) => {
  const tickets = use(loadCustomertickets);
  const [textStatusTicket, setTextStatusticket] = useState([]);
  const handleTextStatusticket = (ticket) => {
    console.log("hello", ticket);
    const newTickets = [...textStatusTicket, ticket];
    setTextStatusticket(newTickets);
    handleInProgressCount(newTickets.length);
  };
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 mx-4 gap-14">
      <div className="col-span-1 md:col-span-3">
        {" "}
        <h1 className="text-3xl text-gray-800 font-semibold">
          {" "}
          Customer Tickets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {" "}
          {tickets.map((ticket) => (
            <CustomerTicket
              key={ticket.id}
              ticket={ticket}
              handleTextStatusticket={handleTextStatusticket}
            ></CustomerTicket>
          ))}
        </div>
      </div>

      <div className="col-span-1 space-y-4">
        <h1 className="text-3xl text-gray-800 font-semibold">Text Status</h1>
        {textStatusTicket.length ? (
          <TaskStatus
            key={textStatusTicket.id}
            textStatusTicket={textStatusTicket}
          ></TaskStatus>
        ) : (
          <p className="text-gray-500">Select a ticket to add to Task Status</p>
        )}

        <ResolvedTask></ResolvedTask>
      </div>
    </div>
  );
};

export default CustomerTickets;

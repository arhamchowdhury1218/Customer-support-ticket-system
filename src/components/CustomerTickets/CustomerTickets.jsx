import React, { use, useState } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";
import { toast } from "react-toastify";

const CustomerTickets = ({ loadCustomertickets, handleInProgressCount }) => {
  const tickets = use(loadCustomertickets);
  const [textStatusTicket, setTextStatusticket] = useState([]);
  const [resolveStatusTicket, setResolveStatusTicket] = useState([]);
  const handleTextStatusticket = (ticket) => {
    const newTickets = [...textStatusTicket, ticket];
    setTextStatusticket(newTickets);
    handleInProgressCount(newTickets.length);
    toast("Card Added to Text Status Section");
  };
  const handleResolvedTask = (singleTaskStatus) => {
    const newTicketStatus = textStatusTicket.filter(
      (removeTicket) => removeTicket.id !== singleTaskStatus.id,
    );
    console.log(newTicketStatus);
    setTextStatusticket(newTicketStatus);
    handleInProgressCount(newTicketStatus.length);
    setResolveStatusTicket([...resolveStatusTicket, singleTaskStatus]);
  };
  return (
    <div className="max-w-full md:w-11/12 mx-auto">
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
              handleResolvedTask={handleResolvedTask}
            ></TaskStatus>
          ) : (
            <p className="text-gray-500">
              Select a ticket to add to Task Status
            </p>
          )}
          <h1 className="text-3xl text-gray-800 font-semibold">
            Resolved Task
          </h1>
          {resolveStatusTicket.length > 0 ? (
            resolveStatusTicket.map((ticket) => (
              <ResolvedTask key={ticket.id} resolveTicket={ticket} />
            ))
          ) : (
            <p className="text-gray-500">No resolved tasks yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;

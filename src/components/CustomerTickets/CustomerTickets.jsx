import React, { use } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";

const CustomerTickets = ({ loadCustomertickets }) => {
  const tickets = use(loadCustomertickets);
  console.log(tickets);
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 mx-4">
      <div className="col-span-3">
        {" "}
        <h1 className="text-3xl text-gray-800 font-semibold">
          {" "}
          Customer Tickets
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {" "}
          {tickets.map((ticket) => (
            <CustomerTicket key={ticket.id} ticket={ticket}></CustomerTicket>
          ))}
        </div>
      </div>

      <div className="col-span-1">Task Status</div>
    </div>
  );
};

export default CustomerTickets;

import React from "react";
import ellipse from "../../assets/Ellipse.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHashtag, faCalendar } from "@fortawesome/free-solid-svg-icons";

const CustomerTicket = ({ ticket }) => {
  console.log(ticket);
  const { id, createdAt, customer, description, priority, status, title } =
    ticket;

  return (
    <div className="">
      <div className="space-y-2 shadow-xl py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-black font-semibold text-xl">{title}</h1>
          <div className="flex gap-1 items-center px-4 py-2 rounded-3xl bg-[#B9F8CF]">
            <img src={ellipse} alt="" />
            <h1>{status}</h1>
          </div>
        </div>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faHashtag} />
              <p>{id}</p>
            </div>

            <p className="text-red-600 ">{priority}</p>
          </div>
          <div className="flex items-center gap-4">
            <p>{customer}</p>
            <div className="flex gap-1 items-center">
              <FontAwesomeIcon icon={faCalendar} />
              <p>{createdAt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;

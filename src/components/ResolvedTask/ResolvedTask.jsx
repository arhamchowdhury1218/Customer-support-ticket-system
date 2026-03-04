import React from "react";

const ResolvedTask = ({ resolveTicket }) => {
  const { title } = resolveTicket;
  return (
    <div className="space-y-2 rounded-2xl bg-[#E0E7FF] p-4 mb-10">
      {" "}
      <h1 className="text-xl text-gray-800 font-semibold">{title}</h1>
    </div>
  );
};

export default ResolvedTask;

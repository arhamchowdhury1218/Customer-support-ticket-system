import React from "react";

const ResolveSingleTask = (resolveTask) => {
  const { title } = resolveTask;
  return (
    <div>
      <div className="space-y-2 shadow-2xl p-5 rounded-2xl">
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default ResolveSingleTask;

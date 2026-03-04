import React from "react";

const SingleTaskStatus = ({ singleTaskStatus, handleResolvedTask }) => {
  const { title } = singleTaskStatus;
  return (
    <div>
      <div className="space-y-2 shadow-2xl p-5 rounded-2xl">
        <h1 className="text-xl font-bold">{title}</h1>
        <button
          onClick={() => handleResolvedTask(singleTaskStatus)}
          className="btn btn-success w-full"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default SingleTaskStatus;

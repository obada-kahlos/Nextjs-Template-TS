import React from "react";

export const OR = ({ title, width }: { title: string; width: string }) => {
  return (
    <div className="flex items-center justify-between my-4">
      <div
        className="h-[1px] bg-[#D6DDEB] rounded"
        style={{ width: width }}
      ></div>
      <p className="text-[#202430] text-[12px]"> {title} </p>
      <div
        className="h-[1px] bg-[#D6DDEB] rounded"
        style={{ width: width }}
      ></div>
    </div>
  );
};

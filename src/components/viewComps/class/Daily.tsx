import React from "react";
import { IDailyData } from "@/components/viewComps/class/Weekly";

interface Iprops {
  data: IDailyData;
}
const Daily = ({ data }: Iprops) => {
  return (
    <div className="px-4 hover:bg-slate-300 focus:bg-slate-500 active:bg-slate-500 ">
      <div className="top flex gap-2 items-center">
        {data.isUpdated ? (
          <div className="bg-green-500 rounded-lg w-2 h-2"></div>
        ) : (
          <div className="bg-gray-500 rounded-lg w-2 h-2"></div>
        )}
        <div>{data.time}</div>
      </div>
      <div className="text-sm font-bold px-2">
        {data.title} (
        {data.current > 3 ? (
          <span className="text-red-500">
            {data.current}
          </span>
        ) : (
          <span>{data.current}</span>
        )}
        <span>/12</span>)
      </div>
    </div>
  );
};

export default Daily;

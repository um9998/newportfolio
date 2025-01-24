import React from "react";
import Main from "./Main";
import {
  Card,
  CardTitle,
} from "@/components/ui/card";
import Header from "./Header";
import { Button } from "@/components/ui/button";
import SectionComp1 from "./SectionComp1";

const TestComp2 = () => {
  return (
    <div className="w-full">
      <Header></Header>

      <div className="w-full flex flex-1 flex-col items-center">
        <Main></Main>

        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="w-full flex items-start justify-left gap-2 border-y ">
          {Array.from({ length: 4 }).map(
            (_, i) => (
              <CardTitle
                key={i}
                className="sm:px-1 lg:px-4"
              >
                <Button variant="ghost">
                  Card {i + 1}
                </Button>
              </CardTitle>
            )
          )}
        </div>
        <div className="w-full flex flex-wrap p-4 justify-center gap-4 ">
          {Array.from({ length: 4 }).map(
            (_, i) => (
              <Card
                key={i}
                className="flex flex-col gap-2 p-4 w-full sm:w-1/2 lg:w-1/6 bg-slate-200 hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-400 cursor-pointer"
              >
                <CardTitle>
                  item card {i + 1}
                </CardTitle>
                <div className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                  Quae, voluptates.
                </div>
              </Card>
            )
          )}
        </div>
        <div className="w-full flex flex-col gap-4">
          <SectionComp1></SectionComp1>
          <SectionComp1></SectionComp1>
        </div>
      </div>
    </div>
  );
};

export default TestComp2;

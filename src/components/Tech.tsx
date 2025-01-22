import React from "react";
import {
  CardContent,
  CardDescription,
  CardHeader,
} from "./ui/card";
import { Wrench } from "lucide-react";
const Tech = () => {
  const tech = [
    { name: "React" },
    { name: "Next.js" },
    { name: "Typescript" },
    { name: "tailwindcss" },
    { name: "shadcn/ui" },
    { name: "styled-components" },
    { name: "zustand" },
    { name: "movX" },
    { name: "expo" },
    { name: "react-native" },
    { name: "node.js" },
    { name: "express" },
    { name: "mysql" },
    { name: "sqlite" },
    { name: "swagger" },
    { name: "postgresql" },
    { name: "socket.io" },
    { name: "three.js" },
    { name: "blender" },
    { name: "figma" },
  ];
  return (
    <div className="flex flex-col w-full px-10">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight lg:text-3xl">
          <Wrench />
          <span>Tech Stack</span>
        </h1>
      </div>
      <div>
        <CardHeader>
          <CardDescription>
            <span className="text-sm">
              도구 절찬 수집중 입니다.
            </span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center gap-2 textalign-center py-1"
                >
                  <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </CardContent>
      </div>
    </div>
  );
};

export default Tech;

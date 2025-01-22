import * as React from "react";

import {
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Pizza } from "lucide-react";

export function ProfileCard() {
  const data = [
    "애매한 지식 상태에서 오는 근거없는 자신감을 버려줘 유민",
    "어디서부터 배워야 하는거지..?",
    "어디까지 배워야 하는거지..?",
    "AWS 자격증 시험 응시료가 13만원이라고?",
    "클라우드 컴퓨팅은 과금을 주의해요.",
    "db에서 sql 쿼리문 작성은 작은 시작일 뿐.",
    "백엔드가 힘든 이유는 딸려오는 지식이 너무 많아서일까?",
    "localhost 탈출기",
    "서버를 구체화 하는데 성공했다!(전에는 망상이었음)",
  ];
  return (
    <div className="w-full">
      <CardHeader>
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight lg:text-3xl">
            <Pizza></Pizza>
            <span>Recent updates</span>
          </h1>
        </div>
        <CardDescription>
          <div className="flex items-center py-2 gap-2">
            <span>
              최근 업데이트 된 생각 모음
            </span>
          </div>

          <div className="text-xs ">
            궁금하시다면.. 대답해드리는게 인지상정
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center gap-2 textalign-center py-1"
            >
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <span>{item}</span>
            </div>
          );
        })}
      </CardContent>
    </div>
  );
}

import React from "react";
import { IDailyData } from "@/components/viewComps/class/Weekly";
import Daily from "@/components/viewComps/class/Daily";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IUserData } from "@/app/view/comp/TestComp1";
interface Iprops {
  data: IDailyData;
}
const NextClass = ({ data }: Iprops) => {
  const currentUserData: IUserData = {
    id: 1,
    username: "dummy1",
    phone: "010-1234-5678",
    start: "2021-10-10",
    end: "2021-10-15",
    status: "done",
    description: "dummy1 description",
    level: 1,
  };
  return (
    <Card className="w-[32rem]">
      <CardHeader>
        <CardTitle className="flex">
          다음 수업 정보
          <div
            className="text-sm font-normal transform translate-x-2
 text-chart-1"
          >
            (n 초 전 업데이트)
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-full flex flex-col gap-2 p-2 rounded-md ">
          <div className="flex justify-center">
            <div className="p-2 font-bold">
              10/10 (월)
            </div>
          </div>
          <Daily data={data}></Daily>
          <div className="p-2">
            plan : {data.description}
          </div>
          <div className="flex flex-row-reverse w-full">
            <Button
              onClick={() => {
                alert(
                  `${currentUserData.username}님이 수업에 참여하기로 약속했어요!`
                );
              }}
            >
              참여하기
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NextClass;

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Daily from "@/components/viewComps/class/Daily";

export interface IDailyData {
  id: number;
  time: string;
  title: string;
  content: string;
  current: number;
  description: string;
  isUpdated: boolean;
}
export interface IWeek {
  date: string;
  dayofweek: string;
}
const Weekly = () => {
  const week: IWeek[] = [
    {
      date: "10/11",
      dayofweek: "월",
    },
    {
      date: "10/12",
      dayofweek: "화",
    },
    {
      date: "10/13",
      dayofweek: "수",
    },
    {
      date: "10/14",
      dayofweek: "목",
    },
    {
      date: "10/15",
      dayofweek: "금",
    },
  ];
  const dummyClassData: IDailyData[] = [
    {
      id: 0,
      time: "06:30",
      title: "mysole",
      content: "dummy1 content",
      current: 1,
      description: "dummy1 description",
      isUpdated: false,
    },
    {
      id: 1,
      time: "10:00",
      title: "ready",
      content: "dummy1 content",
      current: 1,
      description: "dummy1 description",
      isUpdated: false,
    },
    {
      id: 2,
      time: "18:40",
      title: "level 1",
      content: "dummy2 content",
      current: 5,
      description: "dummy2 description",
      isUpdated: false,
    },
    {
      id: 3,
      title: "mysole",
      time: "20:00",
      content: "dummy3 content",
      current: 4,
      description: "dummy3 description",
      isUpdated: false,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>이번 주 수업 현황</CardTitle>
        <CardDescription>
          선생님들은 등록 및 수정 가능하게 하고
          회원들은 클릭? 터치 하면 수업 예약하는
          방식으로! 모바일일땐 어떻게 할지 고민?
          캐러셀? 불편하지 않을라나
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row rounded-md  gap-2 ">
          {week.map((item, index) => {
            return (
              <div
                className={`w-full flex flex-col justify-center `}
                key={index}
              >
                <div className="flex justify-center">
                  <div className="p-2 font-bold">
                    {item.date} ({item.dayofweek})
                  </div>
                </div>
                <div className=" flex flex-col p-2 gap-2">
                  {dummyClassData.map(
                    (
                      data: IDailyData,
                      index: number
                    ) => {
                      return (
                        <Daily
                          data={data}
                          key={index}
                        ></Daily>
                      );
                    }
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default Weekly;

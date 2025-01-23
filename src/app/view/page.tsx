"use client";

import React from "react";

import Weekly, {
  IDailyData,
} from "@/components/viewComps/class/Weekly";

import NextClass from "@/components/viewComps/class/NextClass";

import Login from "@/components/viewComps/auth/Login";

export interface IUserData {
  id: number;
  username: string;
  phone: string;
  start: string;
  end: string;
  status: string;
  description: string;
  level: number;
  membership?: string;
}
const userData: IUserData[] = [
  {
    id: 1,
    username: "dummy1",
    phone: "010-1234-5678",
    start: "2021-10-10",
    end: "2021-10-15",
    status: "done",
    description: "dummy1 description",
    level: 1,
  },
  {
    id: 2,
    username: "dummy2",
    phone: "010-1234-5678",
    start: "2021-10-10",
    end: "2021-10-15",
    status: "done",
    description: "dummy2 description",
    level: 2,
  },
  {
    id: 3,
    username: "dummy3",
    phone: "010-1234-5678",
    start: "2021-10-10",
    end: "2021-10-15",
    status: "done",
    description: "dummy3 description",
    level: 3,
  },
  {
    id: 4,
    username: "dummy4",
    phone: "010-1234-5678",
    start: "2021-10-10",
    end: "2021-10-15",
    status: "done",
    description: "dummy4 description",
    level: 4,
  },
  {
    id: 5,
    username: "dummy5",
    phone: "010-1234-5678",
    start: "2021-10-10",
    end: "2021-10-15",
    status: "done",
    description: "dummy5 description",
    level: 5,
  },
  {
    id: 6,
    username: "dummy6",
    phone: "010-1234-5678",
    start: "2021-10-10",
    end: "2021-10-15",
    status: "done",
    description: "dummy6 description",
    level: 6,
  },
  {
    id: 7,
    username: "dummy7",
    phone: "010-1234-5678",
    start: "2021-10-10",
    end: "2021-10-15",
    status: "done",
    description: "dummy7 description",
    level: 7,
  },
  {
    id: 8,
    username: "dummy8",
    phone: "010-1234-5678",
    start: "2021-10-10",
    end: "2021-10-15",
    status: "done",
    description: "dummy8 description",
    level: 8,
  },
];
const Page = () => {
  const nextClassData: IDailyData = {
    id: 1,
    time: "10:00",
    title: "dummy1",
    content: "dummy1 content",
    current: userData.length,
    description:
      "오늘 무슨 수업 할건지 설명해줌! 왜냐면 선생님들은 어떤 회원이 오늘 수업 들으러 오는지 아니까.. 아니 만약에 나는 level4 정도인데 level1정도의 수업이 예정되어 있으면 돈아까우니까..",
    isUpdated: false,
  };

  return (
    <div className="flex flex-col w-full p-10 gap-2">
      <h1 className="text-lg font-bold">
        🐹 vercel만든 김에 그냥 계속 업데이트
        해본다 이거야...
      </h1>
      <div>
        <ul>
          하도록.
          <li>
            데이터 어떻게 쓸 건지 잘 그려놓기
          </li>
          <li>db 짜고 연결하기</li>
          <li>모바일 후렌들리를 고민하자고</li>
          <li>
            웹은 선생님들만 사용할 거 같으니까...?
            관리자 모드..?
          </li>
          <li>
            카드로 대충 만들어 놓은 것들 다
            화면으로 구성해야됨 헐랭방구
          </li>
          <li>
            요가원 블로그에 나오는 글을 긁어서
            보여주면 화면 채우기 편할듯?
          </li>
          <li>
            일단 잘까? 면접보고 오니까 정신이
            번쩍드네 진짜
          </li>
        </ul>
      </div>
      <div className="flex w-full gap-10">
        <div className="w=[32rem]">
          <NextClass
            data={nextClassData}
          ></NextClass>
        </div>
        <div>
          선생님들은 참여하기 말고 업데이트 , 버튼
          누르면 수업 내용 업데이트 화면 디폴트 값
          정해놓고 그대로 보여지고, 선생님으로
          로그인 시 select 옵션 변경 가능,
          description 내용 수정 가능 수업 하나하나
          모여서 이번주 수업 현황 구성 수업 정보
          수정하면 바로바로 반영되게
        </div>
      </div>

      <Weekly></Weekly>
      <div className="w-full p-2">
        선생님들은 날짜를 클릭하면 해당 날짜를
        수정가능, 전체계획이나 한달 계획 수정하는
        화면 필요, 캘린더, 셀렉트, 쉬는날 표시
        등등, 회원은 버튼 하나 수업 등록하기, 음
        마이페이지? 가서 수업이랑, 회원권정보,
        잠수횟수 관리하는 화면이 필요할듯 잠수
        횟수 많으면 물속에 있는 거같은
        디자인인거임 암튼그럼
      </div>
      <div className="flex w-full gap-10">
        <div className="w=[32rem]">
          <Login></Login>
        </div>
        <div>
          기본적인 회원 정보 + 탕친 횟수 -요가원
          가면 그날 출석을 찍기 때문에, 수업
          예약해놓고 무통보 잠수 횟수 세서 뭐 5번
          넘으면 약속을 잘 지키겠습니다 패널티
          멤버십 날짜-1 어떰 진짜로 열받아서
          안되겠음
        </div>
      </div>
      {/* <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <CardHeader>
            <CardTitle>필요한 것들</CardTitle>
            <CardDescription>
              어떤 것들이 필요한지 등록해봅니다...
            </CardDescription>
          </CardHeader>
          <ScrollArea className="h-[200px] w-full px-4">
            {data.map((data, index) => {
              return (
                <div
                  className="flex items-center gap-2 p-2"
                  key={index}
                  onClick={() => {
                    clickTitle(data.id);
                  }}
                >
                  <div className="rounded-lg w-1 h-1 bg-black"></div>
                  <span> {data.title}</span>
                </div>
              );
            })}
          </ScrollArea>
          <div className="p-6 flex flex-row-reverse gap-2">
            <Button
              onClick={() => {
                addData();
              }}
            >
              +
            </Button>
            <Button
              onClick={() => {
                deleteData();
              }}
            >
              -
            </Button>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <Register></Register>
        </ResizablePanel>
      </ResizablePanelGroup> */}
    </div>
  );
};

export default Page;

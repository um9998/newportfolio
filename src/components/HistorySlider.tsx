import * as React from "react";
import Image from "next/image";
import { History } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardDescription } from "./ui/card";

export function HistorySlider() {
  const datas = [
    {
      description:
        "openai API를 사용한 챗봇 앱입니다. 플레이스토어에 가면 확인하실 수 있습니다.",
      image: "/images/app.png",
    },
    {
      description:
        "반응형 웹을 먼저 만들고 expo와 webview를 사용하여 모바일 환경을 만들었습니다.",
      image: "/images/web1.png",
    },
    {
      description:
        "그러다보니 css 라이브러리를 여러개 사용했습니다.(Grommet, Material-UI, Tailwindcss, styled-components)",
      image: "/images/web2.png",
    },
    {
      description: "",
      image: "/images/web3.png",
    },
    {
      description:
        "메인 화면에선 사용자에 따른 추천 질문을 보여줍니다.",
      image: "/images/web4.png",
    },
    {
      description:
        "three.js, r3f, drie를 사용한 메타버스 프로젝트입니다. socket.io를 사용한 동시접속이 가능합니다. 3D지형과 캐릭터를 만들고, 세계관에 띄울 수 있는 제너레이터가 있습니다. minecraft와 비슷한 느낌입니다.",
      image: "/images/web6.png",
    },
    {
      description:
        "CRUD, RESTful API를 사용한 프로토타입입니다.",
      image: "/images/web5.png",
    },
    {
      description:
        "DnD와 Zustand를 사용한 초등학생 영어 학습 프로그램입니다. tts로 읽어줍니다.",
      image: "/images/tablet1.png",
    },
    {
      description:
        "실행취소, 다시실행, 초기화 기능에 스토어를 적용했습니다. 퀴즈와 일일 미션 부분에선 API를 사용했습니다.",
      image: "/images/tablet2.png",
    },
    {
      description:
        "초등학생 한자 교육 어플리케이션 프로토타입입니다. tts로 읽어줍니다.",
      image: "/images/tablet3.png",
    },
    {
      description:
        "뒤집어서 짝맞추기 게임을 만들었습니다.",
      image: "/images/tablet4.png",
    },
    {
      description:
        "Zimjs로 화면을 따라 한자를 써볼 수 있는 기능을 만들었습니다.",
      image: "/images/tablet5.png",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div>
        <h1 className="flex items-center gap-2 text-2xl font-bold tracking-tight lg:text-3xl">
          <History />
          <span>History</span>
        </h1>
      </div>
      <div className="flex text-sm items-center jutify-center p-8">
        상상을 현실로 뚝딱뚝딱 만들어낼 수
        있다는것은 뿌듯합니다.
      </div>
      <Carousel className="w-full h-[30rem] max-w-2xl ">
        <CarouselContent>
          {datas.map((data, index) => (
            <CarouselItem key={index}>
              <div className="p-1 w-full h-full flex flex-col justify-center items-start gap-2">
                <Image
                  src={data.image}
                  width={500}
                  height={300}
                  style={{
                    backgroundColor:
                      "var(--color-bg)",
                    width: "100%",
                    height: "auto",
                    overflow: "hidden",
                    border:
                      "1px solid var(--color-edge)",
                  }}
                  alt={data.image}
                  unoptimized
                  priority
                  sizes="100vw"
                />
                <CardDescription className="text-sm text-right w-full pt-2">
                  {data.description}
                </CardDescription>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

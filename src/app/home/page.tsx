// "use client";

// import { ModeToggle } from "@/components/ModeToggle";
// import { Button } from "@/components/ui/button";
// import { Copy } from "lucide-react";
// import { ProfileChart } from "@/components/ProfileChart";
// import { ProfileCard } from "@/components/ProfileCard";
// import { HistorySlider } from "@/components/HistorySlider";
// import Tech from "@/components/Tech";
// import { useState } from "react";

// export default function Page() {
//   const [buttonText, setButtonText] = useState(
//     "uminii@naver.com"
//   );

//   const copyToClipboard = () => {
//     navigator.clipboard
//       .writeText(buttonText)
//       .then(() => {
//         alert("Copied!");
//         setButtonText("Copied!");
//       })
//       .catch((err) => {
//         console.error("클립보드 복사 실패:", err);
//       });
//   };
//   return (
//     <div className="flex flex-col min-h-svh w-full items-center justify-center p-6 md:p-10 gap-10">
//       <div className="top w-full ">
//         <div className="header flex w-full justify-between px-10 pt-10">
//           <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
//             <span className="">Umin</span> : what
//             do U mean?
//           </h1>
//           <ModeToggle></ModeToggle>
//         </div>
//         <div className="flex flex-row	w-full p-10">
//           <div className="flex flex-col items-start">
//             <h3 className="text-2xl font-semibold pb-2">
//               안녕하세요 고유민입니다.
//             </h3>
//             <div className="flex flex-col gap-2 pl-2">
//               <div>
//                 과정은 정교하고, 결과는 아름다워야
//                 합니다. 역시 코딩은 종합 예술이
//                 아닐까요.
//               </div>
//               <div>
//                 하나를 알려주면 열을 깨우치기
//                 보다는, 빨리빨리 검색해서 찾아보는
//                 편입니다.
//               </div>
//               <div>
//                 사실... 풀스택에 광기가 서린
//                 이유는 포트폴리오 만들고 싶은데,
//                 개발 환경 구성하는 과정이 더 오래
//                 걸리는데에 분노했기 때문입니다.
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col w-full gap-10">
//         <div className="flex flex-row w-full h-full gap-4 justify-center items-center py-6 ">
//           <div className="flex w-2/5 h-full justify-center items-center">
//             <ProfileChart></ProfileChart>
//           </div>
//           <div className="flex  w-2/5 h-full justify-center items-center">
//             <ProfileCard></ProfileCard>
//           </div>
//         </div>
//         <div className="w-full px-6">
//           <HistorySlider></HistorySlider>
//         </div>
//         <div className="flex flex-row w-full h-full gap-4 justify-center items-center py-6">
//           <Tech></Tech>
//         </div>
//       </div>
//       <div className="flex flex-row w-full justify-end gap-4 pb-10">
//         <Button
//           className="flex justify-between p-6"
//           onClick={copyToClipboard}
//         >
//           {buttonText}

//           <Copy></Copy>
//         </Button>
//       </div>
//     </div>
//   );
// }
import { redirect } from "next/navigation";
export default function Home() {
  //redirect('base/home');
  redirect("/view");
}

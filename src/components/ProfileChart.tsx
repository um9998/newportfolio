"use client";

import * as React from "react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  {
    browser: "FE 개발자의 어깨뽕",
    visitors: 157,
    fill: "var(--color-chrome)",
  },
  {
    browser: "풀스택에 대한 갈망",
    visitors: 173,
    fill: "var(--color-safari)",
  },
  {
    browser: "신기술 너무 빨리 나오는거 아닌가?",
    visitors: 70,
    fill: "var(--color-firefox)",
  },
  {
    browser: "코딩은 종합 예술이다",
    visitors: 170,
    fill: "var(--color-edge)",
  },
  {
    browser: "우린..동료니까...",
    visitors: 153,
    fill: "var(--color-other)",
  },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function ProfileChart() {
  const totalVisitors = React.useMemo(() => {
    return chartData.reduce(
      (acc, curr) => acc + curr.visitors,
      0
    );
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
          I&apos;m coding...
        </h1>
        <CardDescription>
          보통 이런 생각을 하며 코딩합니다.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent hideLabel />
              }
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (
                    viewBox &&
                    "cx" in viewBox &&
                    "cy" in viewBox
                  ) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={
                            (viewBox.cy || 0) + 24
                          }
                          className="fill-muted-foreground"
                        >
                          DAYS
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex flex-col items-start gap-2 font-medium leading-none">
          <p>
            최근에는 초면인 백엔드 스택을 찔러보며
            즐기는 중입니다.
          </p>
          <p>
            그리고.. 무언가를 만들어내는 과정은
            정말 재미있어요.
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}

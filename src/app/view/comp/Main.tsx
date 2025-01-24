import { Button } from "@/components/ui/button";
import { MailOpen } from "lucide-react";
import React from "react";

const Main = () => {
  return (
    <div className="container-wrapper w-full flex justify-center items-center">
      <div className="container w-full flex flex-col gap-1 p-8 md:py-10 lg:py-12 ">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1]">
          Title Title
        </h1>
        <p className="max-w-2xl text-lg font-light text-foreground">
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quae, voluptates.
          Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Quae, voluptates.
        </p>
        <div className="w-full flex flex-wrap items-center justify-start gap-2 pt-2">
          <Button variant="outline">
            Outline
          </Button>
          <Button variant="secondary">
            Secondary
          </Button>
          <Button>
            <MailOpen /> Login with Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Main;

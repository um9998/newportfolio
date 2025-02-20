"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Register = () => {
  return (
    <Card className="w-[32rem]">
      <CardHeader>
        <CardTitle>회원등록</CardTitle>
        <CardDescription>
          그런데 필요 없을듯? 왜냐면 회원 등록은
          학원 가서 결제한 다음 하는거니까..? 일단
          보류보류
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">
                Framework
              </Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">
                    Next.js
                  </SelectItem>
                  <SelectItem value="sveltekit">
                    SvelteKit
                  </SelectItem>
                  <SelectItem value="astro">
                    Astro
                  </SelectItem>
                  <SelectItem value="nuxt">
                    Nuxt.js
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default Register;

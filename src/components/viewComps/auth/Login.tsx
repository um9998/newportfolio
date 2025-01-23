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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Login = () => {
  return (
    <Tabs
      defaultValue="회원"
      className="w-[32rem]"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="회원">
          회원
        </TabsTrigger>
        <TabsTrigger value="비회원">
          비회원
        </TabsTrigger>
      </TabsList>
      <TabsContent value="회원">
        <Card>
          <CardHeader>
            <CardTitle>회원</CardTitle>
            <CardDescription>
              로그인 하고 오늘 수업 참여 표시하기
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username">
                username
              </Label>
              <Input
                id="username"
                defaultValue="Pedro Duarte"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">
                password
              </Label>
              <Input
                id="password"
                defaultValue="@peduarte"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>로그인</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="비회원">
        <Card>
          <CardHeader>
            <CardTitle>비회원</CardTitle>
            <CardDescription>
              1회 무료 체험을 원할때 연락처 남기면
              강사가 연락.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">
                username
              </Label>
              <Input id="current" type="비회원" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">
                phonenumber
              </Label>
              <Input id="new" type="비회원" />
            </div>
          </CardContent>
          <CardFooter>
            <Button>체험등록</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Login;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card className="bg-[#5271FF]">
      <CardContent className="justify-between flex flex-row items-center ">
        <Image alt="Obreiro Digital" src="/logo.png" height={18} width={46} />
        <Button className="bg-[#ffff]  h-[6vh] w-[7vh]" variant="ghost">
          <MenuIcon></MenuIcon>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;

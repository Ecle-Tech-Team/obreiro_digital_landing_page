import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <section className="flex items-center justify-center mt-[1vh]">
      <Card className="bg-[#5271FF] w-[95%] h-[8vh] rounded-3xl">
        <CardContent className="flex justify-between">
          <Image
            className=""
            alt="Obreiro Digital"
            src="/logo.png"
            height={22}
            width={48}
          />
          <Button className="bg-transparent" variant="ghost">
            <MenuIcon className="text-white"></MenuIcon>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};

export default Header;

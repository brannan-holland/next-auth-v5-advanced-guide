import { Poppins } from "next/font/google";
import Image from "next/image";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
};

export const Header = ({
  label,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
            <Image src="/pyek_bw_v.png" alt="Logo" width="200" height="200" className="h-auto w-20" /> 

      <h1 className={cn(
        "text-2xl font-semibold",
        font.className,
      )}>
        Pyek Companion
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  );
};

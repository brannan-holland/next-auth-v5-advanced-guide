"use client";
import { admin } from "@/actions/admin";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { UserRole } from "@prisma/client";
import { RoleGateBoolean } from "@/components/auth/role-gate-boolean";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import { usePathname } from "next/navigation";
import Image from "next/image";

import { UserButton } from "@/components/auth/user-button";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      name: "Parks",
      href: "/echo/",
      role: UserRole.USER
    },
    {
      name: "Maintenance",
      href: "/tth/maintenance",
      role: UserRole.USER
    },
    {
      name: "Server",
      href: "/server/",
      role: UserRole.ADMIN
    },
    {
      name: "Client",
      href: "/client/",
      role: UserRole.ADMIN
    },
    {
      name: "Admin",
      href: "/admin/",
      role: UserRole.ADMIN
    },
    {
      name: "Settings",
      href: "/settings/",
      role: UserRole.ADMIN
    },
  ];



  
  



  
  return (
    <nav className="z-10 flex h-18 w-full items-center justify-between bg-secondary">
      <div className="flex gap-x-2 items-center">
        <Sheet>
          <SheetTrigger asChild className="ml-2">
            <Button variant="outline">
              <GiHamburgerMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="mb-10">Pyek Companion</SheetTitle>
            </SheetHeader>
            {/* <div className="grid gap-4 py-4"> */}
            <div className="">
              
              {navLinks.map((link) => {
                return (
                  
                  <div  key={link.name}>
                    <RoleGateBoolean allowedRole={link.role}>
                    <SheetClose
                      asChild
                      // className="flex h-[48px] grow items-center justify-center gap-2 rounded-md"
                      className="font-bold m-2 container mx-auto"
                    >
                      
                      <Link href={link.href}>
                        <p>{link.name}</p>
                      </Link>
                      
                    </SheetClose>
                    </RoleGateBoolean>
                  </div>
                );
              })}
            </div>
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="py-2">
        <UserButton />
      </div>
    </nav>

    // // <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
    // <nav className="z-10 flex h-16 w-full items-center justify-between bg-secondary">
    //   <div className="flex gap-x-2 items-center">
    //     <Button variant="secondary" className="mr-3 ml-3" onClick={handleDrawer} >
    //      <GiHamburgerMenu className="text-3xl" />
    //     </Button>

    //     {/* <Button
    //       asChild
    //       variant={pathname === "/server" ? "default" : "outline"}
    //     >
    //       <Link href="/server">
    //         Server
    //       </Link>
    //     </Button>
    //     <Button
    //       asChild
    //       variant={pathname === "/client" ? "default" : "outline"}
    //     >
    //       <Link href="/client">
    //         Client
    //       </Link>
    //     </Button>
    //     <Button
    //       asChild
    //       variant={pathname === "/admin" ? "default" : "outline"}
    //     >
    //       <Link href="/admin">
    //         Admin
    //       </Link>
    //     </Button>
    //     <Button
    //       asChild
    //       variant={pathname === "/settings" ? "default" : "outline"}
    //     >
    //       <Link href="/settings">
    //         Settings
    //       </Link>
    //     </Button> */}
    //   </div>
    //   {isOpen && (
    //     <div
    //         onClick={() => setIsOpen(false)}
    //         className="fixed inset-0 z-10 transition-opacity">
    //       <div className="absolute inset-0 bg-black opacity-50"
    //       ></div>
    //     </div>
    //   )}
    // <aside
    //     className={`fixed left-0 top-0 z-30 h-full w-64 transform overflow-auto bg-secondary transition-all duration-300 ease-in-out ${
    //       isOpen ? 'translate-x-0' : '-translate-x-full'
    //     }`}
    //   >
    //     <span className="flex w-full items-center mt-4 mb-4">
    //       <Image
    //         src="/pyek_bw_v.png"
    //         alt="Logo"
    //         width="300"
    //         height="300"
    //         className="mx-auto h-auto w-32"
    //       />
    //     </span>
    //     {navLinks.map((link) => {

    //       return (
    //         <Link
    //           key={link.name}
    //           href={link.href}
    //           onClick={() => setIsOpen(false)}
    //           className={'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-waterloo--300 p-3 text-sm hover:bg-waterloo--100 hover:text-chambray-600 md:flex-none md:p-2 md:px-3'}
    //         >
    //           <p>{link.name}</p>
    //         </Link>
    //       )
    //     })}

    //   </aside>

    //   <UserButton />
    // </nav>
  );
};

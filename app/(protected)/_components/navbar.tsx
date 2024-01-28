"use client";

import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { useState } from "react";

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname();

  const handleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    {
      name: 'Parks',
      href: '/echo/',
    },
    {
      name: 'Maintenance',
      href: '/echo/tth/maintenance'
    },
    {
      name: 'Server',
      href: '/server/',
    },
    {
      name: 'Client',
      href: '/client/',
    },
    {
      name: 'Admin',
      href: '/admin/',
    },
    {
      name: 'Settings',
      href: '/settings/',
    }
  ]
    
  
  
  return (
    // <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
    <nav className="z-10 flex h-16 w-full items-center justify-between bg-alabaster-300">
      <div className="flex gap-x-2 items-center">
        <Button className="mr-3 ml-3 bg-chambray-500 text-alabaster-300" onClick={handleDrawer} >
         <GiHamburgerMenu className="text-3xl" />
        </Button>
        
        
        
        
        
        
        
        
        
        
        
        {/* <Button 
          asChild
          variant={pathname === "/server" ? "default" : "outline"}
        >
          <Link href="/server">
            Server
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/client" ? "default" : "outline"}
        >
          <Link href="/client">
            Client
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/admin" ? "default" : "outline"}
        >
          <Link href="/admin">
            Admin
          </Link>
        </Button>
        <Button 
          asChild
          variant={pathname === "/settings" ? "default" : "outline"}
        >
          <Link href="/settings">
            Settings
          </Link>
        </Button> */}
      </div>
      {isOpen && (
        <div 
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-10 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-50"
          ></div>
        </div>
      )}
    <aside
        className={`fixed left-0 top-0 z-30 h-full w-64 transform overflow-auto bg-alabaster-300 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <span className="flex w-full items-center mt-4 mb-4">
          <Image
            src="/pyek_bw_v.png"
            alt="Logo"
            width="300"
            height="300"
            className="mx-auto h-auto w-32"
          />
        </span>
        {navLinks.map((link) => {

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-waterloo--300 p-3 text-sm hover:bg-waterloo--100 hover:text-chambray-600 md:flex-none md:p-2 md:px-3'}
            >
              <p>{link.name}</p>
            </Link>
          )
        })}

      </aside>

      <UserButton />
    </nav>
  );
};

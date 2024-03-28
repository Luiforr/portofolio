import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
export default function Head() {
  return (
    <Navbar  className="bg-red-800" >
      <NavbarBrand>
        <p className="font-bold text-inherit text-lg"> <a href="/">LUIFOR</a></p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 text-white" justify="center">
        <NavbarItem>
          <Link className="text-black font-serif" href="biodata">
            About
          </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="history" aria-current="page" className="text-black font-serif">
            History      </Link>
        </NavbarItem>
        <NavbarItem >
          <Link href="kda" aria-current="page" className="text-black font-serif">
            KDA     </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-black font-serif" href="/portofolio">
        Gameplay
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
      </NavbarContent>
    </Navbar>
  );
}

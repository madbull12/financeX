import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./dark-mode-toggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="p-2 ">
      <ul className="flex justify-between  items-center">
        <Link href="/" className="text-foreground font-bold text-2xl">financeX</Link>
        <div className="flex items-center gap-x-2">
          <ModeToggle />
          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;

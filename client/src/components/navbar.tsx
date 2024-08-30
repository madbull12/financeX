import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { ModeToggle } from "./dark-mode-toggle";
import Link from "next/link";
import { ny } from "~/lib/utils";
import AnimatedGradientText from "./ui/animated-gradient-text";

const Navbar = () => {
  return (
    <nav className="p-3 bg-white/30 dark:bg-black/30 border-b ">
      <ul className="flex justify-between  items-center">
        <Link href="/" className="text-foreground text-2xl ">
        <AnimatedGradientText>
        <span
            className={ny(
              `animate-gradient inline bg-gradient-to-r font-medium from-[#ac2fff] via-[#0077ff] to-[#b700ff] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            financeX
          </span>
        </AnimatedGradientText>
         
        </Link>
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

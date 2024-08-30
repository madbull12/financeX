"use client";
import React from "react";
import TypingAnimation from "./ui/typing-animation";
import { useUser } from "@clerk/nextjs";

const WelcomeText = () => {
    const { user } = useUser();
  return (
    <TypingAnimation
      className="text-3xl w-1/2 mx-auto text-center font-bold text-black dark:text-white"
      text={`Welcome back ${user?.fullName}, Here's your financial tracker`}
    />
  );
};

export default WelcomeText;

"use client";

import { Icons } from "@/components/icons";
import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import useScrollOffset from "@/hooks/useScrollOffset";
import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

function Navbar() {
  const isOffset = useScrollOffset(80);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const buttonClasses = cn(
    "outline outline-1 outline-primary uppercase",
    "disabled:text-background disabled:bg-primary disabled:text-opacity-100",
    isOffset ? "" : "bg-transparent hover:bg-background",
  );

  return (
    <header
      className={cn(
        "z-50 top-0 fixed w-full transition-all border-b",
        isOffset
          ? "bg-background p-5 border-primary pointer-events-auto"
          : "p-3 border-transparent pointer-events-none",
      )}
    >
      <div className={cn("container flex justify-between items-center")}>
        <Link
          className={cn(
            buttonVariants({
              variant: "ghost",
              size: "icon",
            }),
          )}
          href="#section-hero"
          onClick={handleScroll}
        >
          <Icons.mainLogo
            className={cn(
              "h-11 w-11 transition-all",
              !isOffset ? "hidden" : "visible",
            )}
          />
        </Link>
        <div className="flex gap-4 items-center pointer-events-auto">
          <Link
            className={cn(
              buttonClasses,
              buttonVariants({
                variant: "ghost",
                size: "sm",
              }),
            )}
            href={"#section-about"}
            onClick={handleScroll}
          >
            About Me
          </Link>
          <Link
            className={cn(
              buttonClasses,
              buttonVariants({
                variant: "ghost",
                size: "sm",
              }),
            )}
            href={"#section-project"}
            onClick={handleScroll}
          >
            Project
          </Link>
          <Link
            className={cn(
              buttonClasses,
              buttonVariants({
                variant: "ghost",
                size: "sm",
              }),
            )}
            href={"#section-experience"}
            onClick={handleScroll}
          >
            Experiece
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

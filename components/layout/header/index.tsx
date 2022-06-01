import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import NavSections from "./NavSections";
import NavIcons from "./NavIcons";
import BlogHeader from "./BlogHeader";
import { Container } from "../../common/container";

const Header = () => {
  return (
    <header className="bg-[#222222] py-4">
      <Container>
        <div className="flex items-center h-16 ">
          <div className="flex justify-between w-full items-end">
            <BlogHeader />
            <NavSections />
            <NavIcons />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

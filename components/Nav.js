import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./styles/Navigation.styles";
import { NavMobile } from "./styles/NavMobile.styles";
import Flex from "./styles/utils/Flex";

const Nav = () => {
  const [open, setOpen] = useState(false);

  const toggleNavigation = () => setOpen(!open);

  return (
    <Navigation>
      <div className="nav-container">
        <Link href="/" passHref>
          <Image
            src="/assets/favicon-32x32.png"
            alt="menu icon"
            width={40}
            height={40}
          />
        </Link>
        <div className="hamburger">
          <Image
            onClick={toggleNavigation}
            src={`/assets/${open ? "close.svg" : "hamburger.svg"}`}
            alt="menu icon"
            width={24}
            height={21}
          />
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <NavMobile
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 0.3 }}
            exit={{ x: "100%" }}
          >
            <ul>
              <li className="active">
                <Flex justify="flex-start">
                  <span className="navText">
                    <p>00</p>
                  </span>
                  <p className="navText">HOME</p>
                </Flex>
              </li>
              <li>
                <Flex justify="flex-start">
                  <span className="navText">
                    <p>01</p>
                  </span>
                  <p className="navText">DESTINATION</p>
                </Flex>
              </li>
              <li>
                <Flex justify="flex-start">
                  <span className="navText">
                    <p>03</p>
                  </span>
                  <p className="navText">CREW</p>
                </Flex>
              </li>
              <li>
                <Flex justify="flex-start">
                  <span className="navText">
                    <p>04</p>
                  </span>
                  <p className="navText">TECHNOLOGY</p>
                </Flex>
              </li>
            </ul>
          </NavMobile>
        )}
      </AnimatePresence>
    </Navigation>
  );
};

export default Nav;

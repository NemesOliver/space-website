import React, { useRef, useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Navigation from "./styles/navigation/Navigation.styles";
import { NavMobile } from "./styles/navigation/NavMobile.styles";
import Flex from "./styles/utils/Flex";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navRef = useRef();
  const router = useRouter();

  const toggleNavigation = () => setOpen(!open);
  const closeNavigation = () => setOpen(false);

  useEffect(() => {
    const onBodyClick = (e) => {
      if (navRef.current.contains(e.target)) {
        return;
      }

      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick, { capture: true });

    return () =>
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
  }, []);

  return (
    <Navigation ref={navRef}>
      <div className="nav-container">
        <Image
          src="/assets/favicon-32x32.png"
          alt="menu icon"
          width={40}
          height={40}
        />

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
              <Link href="/" passHref>
                <li
                  onClick={closeNavigation}
                  className={router.pathname == "/" ? "active" : ""}
                >
                  <Flex justify="flex-start">
                    <span className="navText">
                      <p>00</p>
                    </span>
                    <p className="navText">HOME</p>
                  </Flex>
                </li>
              </Link>
              <Link href="/destination" passHref>
                <li
                  onClick={closeNavigation}
                  className={router.pathname == "/destination" ? "active" : ""}
                >
                  <Flex justify="flex-start">
                    <span className="navText">
                      <p>01</p>
                    </span>
                    <p className="navText">DESTINATION</p>
                  </Flex>
                </li>
              </Link>
              <Link href="/crew" passHref>
                <li
                  onClick={closeNavigation}
                  className={router.pathname == "/crew" ? "active" : ""}
                >
                  <Flex justify="flex-start">
                    <span className="navText">
                      <p>03</p>
                    </span>
                    <p className="navText">CREW</p>
                  </Flex>
                </li>
              </Link>
              <Link href="/technology" passHref>
                <li
                  onClick={closeNavigation}
                  className={router.pathname == "/technology" ? "active" : ""}
                >
                  <Flex justify="flex-start">
                    <span className="navText">
                      <p>04</p>
                    </span>
                    <p className="navText">TECHNOLOGY</p>
                  </Flex>
                </li>
              </Link>
            </ul>
          </NavMobile>
        )}
      </AnimatePresence>
    </Navigation>
  );
};

export default Nav;

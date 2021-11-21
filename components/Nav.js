import React from "react";
import Link from "next/link";
import Navigation from "./styles/Navigation.styles";
import Image from "next/image";

const Nav = () => {
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
            src="/assets/hamburger.svg"
            alt="menu icon"
            width={24}
            height={21}
          />
        </div>
      </div>
    </Navigation>
  );
};

export default Nav;

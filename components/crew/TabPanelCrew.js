import React, { useState, useEffect } from "react";
import Image from "next/image";
import Flex from "../styles/utils/Flex";
import { TabPanelCrew as Tab } from "../styles/pages/crew/TabPanelCrew.styles";
import { ImageWrapper } from "../styles/utils/ImageWrapper";

const TabPanelCrew = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveIndex = (index) => setActiveIndex(index);

  useEffect(() => {
    const delay = 5000;

    const id = setTimeout(() => {
      if (activeIndex < imgs.length - 1) {
        setActiveIndex(activeIndex + 1);
      } else {
        setActiveIndex(0);
      }
    }, delay);

    return () => clearTimeout(id);
  }, [activeIndex]);

  return (
    <Tab>
      {imgs.map(
        (img, index) =>
          activeIndex === index && (
            <ImageWrapper key={img}>
              <Image
                priority
                src={`/assets/crew/${img}`}
                alt="commander"
                layout="fill"
              />
            </ImageWrapper>
          )
      )}
      <hr className="no-margin" />
      <Flex>
        {content.map((item, index) => (
          <div
            key={index}
            onClick={() => changeActiveIndex(index)}
            className={`dot ${activeIndex === index ? "active" : ""}`}
          ></div>
        ))}
      </Flex>
      {content.map(
        ({ position, name, description }, index) =>
          activeIndex === index && (
            <div key={name}>
              <p className="position">{position}</p>
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
          )
      )}
    </Tab>
  );
};

export default TabPanelCrew;

const imgs = [
  "image-douglas-hurley.webp",
  "image-mark-shuttleworth.webp",
  "image-victor-glover.webp",
  "image-anousheh-ansari.webp",
];

const content = [
  {
    position: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    position: "MISSION SPECIALIST ",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    position: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    position: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];

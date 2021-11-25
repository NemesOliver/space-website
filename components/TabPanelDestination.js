import React, { useState } from "react";
import Image from "next/image";
import Flex from "./styles/utils/Flex";
import { TabPanelDestination as Tab } from "./styles/TabPanelDestination.styles";

const TabPanelDestination = () => {
  const [active, setActive] = useState(0);

  const changeActive = (index) => setActive(index);

  return (
    <Tab>
      <Flex direction="column">
        <div className="img-wrapper-destination">
          {content.map(
            ({ img }, index) =>
              active === index && (
                <Image
                  key={img}
                  src={img}
                  alt="planet"
                  width={170}
                  height={170}
                />
              )
          )}
        </div>
        <div>
          <ul className="tabs">
            <Flex>
              {tabs.map((tab, index) => (
                <li
                  className={`${active === index ? "active" : ""}`}
                  onClick={() => changeActive(index)}
                  key={tab}
                >
                  <p className="subheading2">{tab}</p>
                </li>
              ))}
            </Flex>
          </ul>
          {content.map(
            ({ title, description, avgDistance, travelTime }, index) => (
              <div key={title}>
                {active === index && (
                  <>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <hr />
                    <div className="distance">
                      <p className="subheading2">AVG. DISTANCE</p>
                      <h5>{avgDistance}</h5>
                    </div>
                    <div className="time">
                      <p className="subheading2">EST. TRAVEL TIME</p>
                      <h5>{travelTime}</h5>
                    </div>
                  </>
                )}
              </div>
            )
          )}
        </div>
      </Flex>
    </Tab>
  );
};

export default TabPanelDestination;

const tabs = ["MOON", "MARS", "EUROPA", "TITAN"];
const content = [
  {
    title: "MOON",
    img: "/assets/destination/image-moon.webp",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    avgDistance: "384,400 KM",
    travelTime: "3 DAYS",
  },
  {
    title: "MARS",
    img: "/assets/destination/image-mars.webp",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    avgDistance: "225 MIL. KM",
    travelTime: "9 MONTHS",
  },
  {
    title: "EUROPA",
    img: "/assets/destination/image-europa.webp",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    avgDistance: "628 MIL. KM",
    travelTime: "3 YEARS",
  },
  {
    title: "TITAN",
    img: "/assets/destination/image-titan.webp",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    avgDistance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
  },
];

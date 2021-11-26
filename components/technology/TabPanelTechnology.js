import Image from "next/image";
import { TabPanelTechnology as Tab } from "../styles/pages/technology/TabPanelTechnology.styles";
import Flex from "../styles/utils/Flex";
import { ImageWrapper } from "../styles/utils/ImageWrapper";
import Container from "../Container";
import { useState } from "react";

const TabPanelTechnology = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeActiveIndex = (index) => setActiveIndex(index);

  return (
    <Tab>
      <Flex direction="column" align="center">
        <ImageWrapper height="200px" width="100vw">
          {imgs.map(
            (img, index) =>
              activeIndex === index && (
                <Image
                  key={img}
                  priority
                  src={`/assets/technology/${img}`}
                  alt="Launch vehicle landscape"
                  layout="fill"
                />
              )
          )}
        </ImageWrapper>
        <Container>
          <div className="tabs">
            {content.map((item, index) => (
              <div
                key={index}
                className={activeIndex === index ? "active" : ""}
                onClick={() => changeActiveIndex(index)}
              >
                {index + 1}
              </div>
            ))}
          </div>
          {content.map(
            ({ title, description }, index) =>
              activeIndex === index && (
                <>
                  <p className="subheading2">THE TERMINOLOGY</p>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </>
              )
          )}
        </Container>
      </Flex>
    </Tab>
  );
};

export default TabPanelTechnology;

const imgs = [
  "image-launch-vehicle-landscape.jpg",
  "image-spaceport-landscape.jpg",
  "image-space-capsule-landscape.jpg",
];
const content = [
  {
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicleused to carry a payload from Earths surface to space, usually toEarth orbit or beyond. Our WEB-X carrier rocket is the most powerfulin operation. Standing 150 metres tall, its quite an awe-inspiringsight on the launch pad!",
  },
  {
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

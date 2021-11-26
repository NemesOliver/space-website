import Head from "next/head";
import Container from "../components/Container";
import Flex from "../components/styles/utils/Flex";
import TechnologyPage from "../components/styles/pages/technology/Technology.styled";
import TabPanelTechnology from "../components/technology/TabPanelTechnology";

const technology = () => {
  return (
    <>
      <Head>
        <title>Space Travel - Technology</title>
      </Head>
      <TechnologyPage>
        <Flex direction="column">
          <Container>
            <Flex direction="column" align="center">
              <div className="text">
                <span>
                  <p>03</p>
                </span>
                <p className="navText">SPACE LAUNCH 101</p>
              </div>
            </Flex>
          </Container>
          <TabPanelTechnology />
        </Flex>
      </TechnologyPage>
    </>
  );
};

export default technology;

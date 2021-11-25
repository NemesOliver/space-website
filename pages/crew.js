import Head from "next/head";
import Container from "../components/Container";
import TabPanelCrew from "../components/TabPanelCrew";
import { CrewPage } from "../components/styles/pages/Crew.styled";
import Flex from "../components/styles/utils/Flex";

const destination = () => {
  return (
    <>
      <Head>
        <title>Space Travel - Crew</title>
      </Head>
      <CrewPage>
        <Container>
          <Flex direction="column" align="center">
            <div className="text">
              <span>
                <p>02</p>
              </span>
              <p className="navText">MEET YOUR CREW</p>
            </div>
            <TabPanelCrew />
          </Flex>
        </Container>
      </CrewPage>
    </>
  );
};

export default destination;

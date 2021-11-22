import Head from "next/head";
import Image from "next/image";
import Container from "../components/Container";
import { DestinationPage } from "../components/styles/pages/destination.styled";
import Flex from "../components/styles/utils/Flex";
import TabPanelDestination from "../components/TabPanelDestination";

const destination = () => {
  return (
    <>
      <Head>
        <title>Space Travel - Destination</title>
      </Head>
      <DestinationPage>
        <Container>
          <Flex direction="column" align="center">
            <div className='text'>
              <span>
                <p>01</p>
              </span>
              <p className="navText">PICK YOUR DESTINATION</p>
            </div>
            <TabPanelDestination />
          </Flex>
        </Container>
      </DestinationPage>
    </>
  );
};

export default destination;

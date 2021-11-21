import Head from "next/head";
import { HomePage } from "../components/styles/Home.styled";
import ButtonCTA from "../components/ButtonCTA";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Space Travel</title>
      </Head>
      <HomePage>
        <div>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1>SPACE</h1>
          <p>
            Let’s face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <ButtonCTA text="EXPLORE" />
      </HomePage>
    </div>
  );
}

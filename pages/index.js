import Head from "next/head";
import GlobalStyles from "@/styles/Global";
import Main from '@/pages/components/main/Main'
import {IndexStyled} from "@/pages/index.styled";

export default function Home() {
  return (
    <IndexStyled>
      <GlobalStyles />
      <Head>
        <title>Frontend Mentor | 3-column preview card component</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Main />
    </IndexStyled>
  );
}

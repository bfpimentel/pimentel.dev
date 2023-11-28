import { NextApiRequest, NextPage } from "next";
import { getShortenedURLs } from "@/data/repository/GithubRepository";
import Head from "next/head";

export const getServerSideProps = async (request: NextApiRequest) => {
    const short = request.query.id as string;
    const urls = await getShortenedURLs();
    const shortenedURLItem = urls.find((item) => item.short === short);
  
    if (shortenedURLItem) {
      return {
        redirect: {
          destination: shortenedURLItem.url,
          permanent: false,
        },
      };
    }
  
    return {
      props: {},
    };
  }
  
  const ShortPage: NextPage = () => {
    return (
      <div>
        <Head>
          <title>URL Shortener</title>
          <meta name="description" content="Shortened link entry not found." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Shortened link entry not found.</h1>
      </div>
    );
};

export default ShortPage;
  

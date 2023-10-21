import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from "next/head";
import Footer from "@/components/Footer";

interface Props {
  source: MDXRemoteSerializeResult
}

const content = `# O que mais importa

Antes que você abra meu presente, linda, preciso te falar um pouco sobre ele.

Eu penso que o presente que estou te dando é o que representa de mais importante pra você. É o que fez você ser quem você é.

É a base para você ter se tornado uma das pessoas mais obstinadas que conheço, uma das mais estudiosas, uma das mais esforçadas e uma das mais amorosas. 

Existem muitas coisas materiais que posso te dar, mas, pessoalmente, não achei que seria adequado.

Eu tenho certeza que você amaria um Lego, uma coleção de livros, um quadro do Van Gogh, minha orelha (esse é complicado), mas eu preferi deixar esses para os mimos que um dia posso te dar. 

## [Abra seu presente e depois clique aqui](presente1)`

export default function Presente({ source }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2">
      <Head>
        <title>Lu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col px-0 py-4 bg-white text-black dark:bg-black dark:text-white">
        <div className="prose">
          <MDXRemote {...source} />
        </div>
      </main>
      <Footer />
    </div>
    );
}

export async function getStaticProps() {
  const source = await serialize(content);
  return { props: { source: source } };
}
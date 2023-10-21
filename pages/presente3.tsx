import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from "next/head";
import Footer from "@/components/Footer";

interface Props {
  source: MDXRemoteSerializeResult
}

const content = `# Conclusão

Repetindo um pouco do que falei na mensagem que te mandei 00:00, eu espero que seu dia seja incrível.

Agora, com seu presente, também espero que ele tenha adicionado mais um pouquinho de felicidade no seu dia tão especial.

Espero que agora eu possa fazer parte da sua base daqui pro resto da sua vida.

Rezo para que eu consiga ser capaz de te ajudar quando você precisar.

Não consigo me ver sem você. Obrigado, meu anjo, por ser também o meu presente de todos os dias.

## Te amo infinito, meu amorzinho.
Com eterno amor,<br />
Bruno.`

export default function Presente3({ source }: Props) {
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
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from "next/head";
import Footer from "@/components/Footer";

const content = `# Um mimo

Meu anjo, gostaria de te presentear com um mimo hoje, numa data ordinária.

Tenho certeza que você vai gostar, já que sei que é algo importante para você.

## Instruções

1. No link abaixo, você terá que inserir uma senha para liberar o conteúdo.
2. A senha para liberar é nosso início de "namoro" (o dia do primeiro beijo) + a sua data de nascimento, no seguinte formato: DiaMesAno-DiaMesAno
3. **Exemplo**: 01012001-02022002
4. Nesse arquivo você terá mais instruções.

Claramente você pode me chamar caso tenha alguma dúvida.

## [Link para arquivo secreto](https://privatebin.net/?e71ac3be30223ed1#F953T65LmRNzKCdhnDDn1AiiXPKeeTR1h8R6S56cKsBi)

Te amo infinitamente, meu amor.

Bruno.`

interface Props {
  source: MDXRemoteSerializeResult
}

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
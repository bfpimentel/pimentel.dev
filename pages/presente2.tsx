import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from "next/head";
import Footer from "@/components/Footer";

interface Props {
  source: MDXRemoteSerializeResult
}

const content = `# Seu melhor amigo

Acho que ficou meio evidente que eu quis mostrar bastante seu pai nas fotos.

E foi proposital, né.

É lindo ver como você fala de seu amado pai e melhor amigo. Toda vez que você fala dele é claro o amor que você tem por ele.
Sempre disse que é incrível ver você falando do que você gosta, e quando você fala dele, isso é mais exaltado ainda.

Para conseguir fotos, vasculhei o seu perfil do Facebook (agora você sabe o real motivo de eu ter pedido pra te adicionar), vasculhei o perfil do seu pai,
vasculhei o perfil da sua mãe... Justamente para achar essas memórias que provavelmente nunca vão sair da sua memória e do seu coração.

É difícil dizer que senti uma migalha do que você sentiu, pois me pegava tentando não acreditar que ele não está mais aqui.
Mas é mais difícil ainda tentar entender como você e sua família foram fortes. 

Tenho certeza que seu pai teve muito orgulho de você.
E, mesmo que nossa religião não acredite na possibilidade "dele estar vigiando você lá de cima", tenho certeza que ele teria muito orgulho de você hoje também.
Você se tornou a substituta perfeita para ele em seu emprego. É impossível dizer que não há mérito no que você faz. Você dá a vida para fazer o perfeito ser possível.

Seria um sonho trocar uma ideia com alguém que compartilha (tantas) características comigo.

É triste eu não poder conhecer meu sogrão, mas vou amá-lo assim como amo vocês todos.
O que tenho como motivação é que devo honrá-lo e cuidarei da filha dele até o fim da minha vida.

## [Clique aqui para ler a conclusão (tá acabando)](presente3)`

export default function Presente2({ source }: Props) {
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
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Head from "next/head";
import Footer from "@/components/Footer";

interface Props {
  source: MDXRemoteSerializeResult
}

const content = `# O presente

É, meu amor, eu não tenho certeza se você tinha decifrado ou não o que era, mas é com muito amor que escolhi esse presente para você.

É bem provável que você pense "afff não acredito que você escolheu essa foto", mas tenho certeza ainda que cada um desses momentos
possui uma história que você se lembra de todos os detalhes.

Tinha muita foto que eu gostaria de ter colocado (agradeço infinitamente minha sogrinha perfeita por ter me mandado),
mas várias também estavam com uma qualidade que não ia ficar muito boa na impressão. 

Na primeira versão que fiz, eu tinha colocado aquela foto sua com o Theo, a foto que está no seu insta.
Aquela que você falou "é, mas eu não gostei muito dessa foto". Assim que você falou isso, eu fui e editei pra outra versão 💀💀💀.

Mas também há outro motivo pra não ter colocado o Theo. Nem eu, nem o Nic. 

O foco é em quem criou a menina que vai me acompanhar pro resto da vida. Aquilo que te sustentou pelos momentos mais difíceis da sua vida,
e que te acompanhou nos melhores deles. O foco é em quem vai te amar com o amor mais puro de todos até a eternidade.

Também teremos muito tempo, se nosso bom Deus permitir, para tirarmos muitas fotos com nossos filhos, sobrinhos, netos, bisnetos... 

Meu desejo é que um dia você pendure esse quadro na nossa casinha, para que sejamos sempre lembrados do que mais importa: nossa família. Tudo é por eles.

Também preciso dizer que no dia que eu conheci sua família, eu também ganhei esse presente. Ganhei, com todo amor do mundo, uma família que me acolheu.

Ganhei uma sogra incrível, ganhei cunhados e primos que eu consigo me conectar, ganhei seus avós que me tratam como se fosse um neto,
ganhei seus tios que sempre me tratam com muito cuidado...

E ainda assim estou longe de agradecer o suficiente à Deus por tudo isso.

## [Clique aqui para ler algumas palavras minhas na imensidão que é...](presente2)`

export default function Presente1({ source }: Props) {
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
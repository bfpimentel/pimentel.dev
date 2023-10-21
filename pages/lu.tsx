import Head from "next/head";
import Footer from "@/components/Footer";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

interface Props {
  source: MDXRemoteSerializeResult
}

const content = `# Lu,

Nossos primeiros seis meses foram densos. Digo densos da maneira que aconteceu MUITA coisa.
Nos conhecemos melhor, nos tornamos mais íntimos, aprendemos mais sobre o jeito de cada um... e ainda há uma infinidade de coisas para eu aprender sobre você.
Afinal, esse é só o começo de nossa eternidade.

Não sei se posso dizer que entreguei meu coração a Deus, como você disse que aconteceu com você. Em grande parte do tempo, me sentia apenas desiludido, sem esperança.
Mas, mais uma Deus foi lá e mostrou o poder dEle. E Ele me deu o melhor presente da minha vida: você.

Com isso, gostaria de dar uma resposta a altura da sua, mesmo que eu tenha certeza que não terei palavras tão lindas quanto às suas. Mas, pelo menos, farei do meu jeito ❤️.

## Qual a sua qualidade que eu mais admiro e gostaria de ter?

É também difícil para eu escolher apenas uma. Você é um potinho de qualidades. Não consigo descrever o tanto que te admiro em diversas coisas.

Uma coisa que me admira, sem exagero algum, é seu esforço. Eu não vi muita coisa acontecendo, mas assumir um setor tão complicado como o seu demanda uma grande quantidade de esforço e de resiliência (não estou sendo coach aqui).
É doido ver como você é obstinada a fazer as coisas da melhor forma possível, afinal, "é melhor perfeito do que feito". E, mesmo que eu tenha minhas "críticas" a esse modo, eu entendo o quão isso é importante para você.

Cito o exemplo da empresa apenas, literalmente, como um exemplo. Você se esforça em tudo que faz. Leitura é algo presente na sua vida desde sempre, mesmo assim, isso é algo que demanda esforço, demanda disciplina.
Você é obstinada em aprender mais sobre a Igreja Católica, e eu dúvido que você vai parar até o fim da sua vida. Você não hesita em participar dos eventos da igreja. Mesmo que esteja cansada, você vai cumprir com o que se comprometeu.

Você gosta de fazer as coisas do seu jeitinho, e não tem nada de errado nisso. Você se esforça para que as coisas saiam como planejado (mesmo que eu ache que seja impossível em inúmeros casos 💀).
Seu aniversário está aí, e, mais uma vez dá pra ver como você se esforça pra fazer tudo ficar perfeito.

## No nosso relacionamento, o que mais aprendi com você?

Voltando às suas qualidades, você cita a minha qualidade de "cuidar", mas é impossível não falar da sua capacidade de fazer isso. Você é sempre proativa em ajudar, sejá lá quem for. Você sempre está disposta a dar seu tempo por outra pessoa.
Isso é incrível, e eu não me vejo fazendo isso (algo para tomar notas, para eu melhorar). Você dá todo o amor do mundo para quem está perto de você.

Eu estou tentando aprender a você como é estar mais perto da família. Você me trouxe para mais perto da minha, além de ter acolhido da melhor forma possível na sua.
Você sempre está junto deles. E isso é lindo. É assim que tem que ser. E, obviamente, o seu cuidado e amor reflete na relação com eles também.

Eu interpreto sua arte de cuidar como: você está disposta até blindar os seus próprios sentimentos para poder cuidar mais efetivamente de quem precisa. E você é incrivelmente forte por isso (e por mais um monte de coisa).  

Consequentemente, aprendi um pouco do que é cuidar. Para mim, o principal objetivo da minha vida é cuidar de você e de nossa família. Todo o resto é pó.

## No que eu acho que você poderia se esforçar mais na nossa relação?

Como você mesma disse, também acredito que devemos trabalhar juntos. E estendo isso para qualquer coisa. Não seria justo dizer que você precisa se esforçar mais em algo,
visto que é evidente que você se esforça todo dia para que trabalhemos juntos. Cada pedacinho que conheço de você, fica mais claro isso.

Em contrapartida, eu creio que há muito que eu possa trabalhar. Preciso ser mais atento, preciso aprender a cuidar mais.
Muita coisa foge da minha natureza, creio eu, mas não perco a esperança que com esforço e aprendizado a situação não melhore.

## Te amo, meu anjo.
Com infinito e eterno amor,
Bruno ❤️`

export default function Lu({ source }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2">
      <Head>
        <title>Lu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col px-0 py-4">
        <div className="prose bg-white text-black dark:bg-black dark:text-white">
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
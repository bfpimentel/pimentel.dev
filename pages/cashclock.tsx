import React, { useRef, useState } from "react";
import { clearInterval, setInterval } from "timers";
import Head from "next/head";
import Footer from "@/components/Footer";

export default function CashClock() {
  const [state, setState] = useState({
    multiplier: 0,
    isRunning: false,
    isPaused: false,
    elapsedTime: 0,
    value: "R$ 0,00"
  });

  var timer = useRef<NodeJS.Timer>();

  const pauseOrResumeTimer = () => {
    if (state.isPaused) resumeTimer();
    else if (state.isRunning) pauseTimer();
    else startTimer();
  };

  const startTimer = () => {
    const currencyFormatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

    setState((previousState) => ({ ...previousState, isRunning: true, isPaused: false }));

    timer.current = setInterval(() => {
      setState((previousState) => {
        const newElapsedTime = previousState.elapsedTime + 1;

        return {
          ...previousState,
          elapsedTime: newElapsedTime,
          value: currencyFormatter.format((newElapsedTime / 100 / 2) * 0.5555555555) // todo: add custom multiplier
        };
      });
    }, 1);

    // setTimeout(pauseTimer, 60000); // for debugging
  };

  const pauseTimer = () => {
    clearInterval(timer.current);
    setState((previousState) => ({ ...previousState, isPaused: true }));
  };

  const resumeTimer = () => {
    startTimer();
  };

  const resetTimer = () => {
    clearInterval(timer.current);
    setState((previousState) => ({
      ...previousState,
      isRunning: false,
      isPaused: false,
      elapsedTime: 0,
      value: "R$ 0,00"
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-0 px-2">
      <Head>
        <title>Cash Clock</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center px-0 py-4">
        <img className="w-4/12 h-auto m-8" src="placa.png" alt="Profile Picture" />
        <h1 className="mt-8 m-3 leading-5 text-9xl font-bold">{state.value}</h1>
        <div className="flex flex-row m-12 items-center justify-center">
          <button
            className="w-24 p-2 m-4 rounded-md font-bold bg-black text-white dark:bg-white dark:text-black"
            onClick={pauseOrResumeTimer}
          >
            {state.isPaused ? "Resumir" : state.isRunning ? "Pausar" : "Começar"}
          </button>
          <button
            className="w-24 p-2 m-4 rounded-md font-bold bg-black text-white dark:bg-white dark:text-black"
            onClick={resetTimer}
          >
            Zerar
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

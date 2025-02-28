/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import confetti from "canvas-confetti";

export default function Home() {
  const [accepted, setAccepted] = useState<boolean>(false);
  const [swapped, setSwapped] = useState<boolean>(false);
  const [respuesta, setRespuesta] = useState<string>("No");
  const posiblesRepuestas: string[] = [
    "No",
    "Estas segura?",
    "Piensalo Bien",
    "De veritas?",
    "Ultima chance 🔫",
    "Si quiero :)",
  ];

  const playAudio = () => {
    const audio = new Audio("/eltajoylatanga.mp3");
    audio.play().catch((err) => console.log("Play error:", err));
    setSwapped(true);
  };

  const checkeandoRespuestas = () => {
    // When the last answer is reached it will start the function proposalAccepted
    const index = posiblesRepuestas.indexOf(respuesta);
    setRespuesta(
      index === posiblesRepuestas.length - 1
        ? posiblesRepuestas[0]
        : posiblesRepuestas[index + 1]
    );

    if (index === posiblesRepuestas.length - 1) {
      proposalAccepted();
    }
  };

  const proposalAccepted = () => {
    setAccepted(true);
    confetti();
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 text-black bg-white">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className={`${accepted ? '' : 'hidden'}`}>
          <div className="w-full flex justify-center mb-10">
          <p className="text-3xl">ESOOOOO!!</p>

          </div>
          <img src="/catdancing.gif" alt="cat" className={`h-82 w-full`} />
        </div>

        <div className={`${accepted ? "hidden" : ''} `}>
          <div
            className={`${
              swapped ? "mb-5" : "mb-20"
            } w-full flex justify-center `}
          >
            <button
              className={`h-10 border-2 rounded-lg w-1/2 ${
                swapped ? "hidden" : ""
              } cursor-pointer`}
              onClick={playAudio}
            >
              PRESIONAMEEE
            </button>
            <img
              src="catdancing.gif"
              alt="cat-dancing"
              className={`${swapped ? "" : "hidden"} h-40`}
            />
          </div>

          <img src="/cat-bowl.gif" alt="gif" />

          <div className="flex flex-col w-full justify-center items-center">
            <p className="text-black text-2xl">Quieres ir a comer makis? 😁</p>

            <div className="flex gap-4 w-full mt-6">
              <button
                className="border rounded-lg h-10 w-full"
                onClick={proposalAccepted}
              >
                Si
              </button>
              <button
                className="border rounded-lg h-10 w-full"
                onClick={checkeandoRespuestas}
              >
                {respuesta}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

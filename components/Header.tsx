import React from "react";

export default function Header() {
  return (
    <>
      <img
        className="h-52 w-52 rounded-full"
        src="https://github.com/bfpimentel.png?size=208"
        alt="Profile Picture"
      />
      <h2 className="m-3 leading-5 text-4xl font-bold">Bruno Pimentel</h2>
      <h3 className="m-3 text-center text-2xl">Senior Android Engineer.</h3>
      <h3 className="mb-5 text-center text-2xl">
        Self-taught. Adaptable. Challenge seeker.
      </h3>
    </>
  );
}

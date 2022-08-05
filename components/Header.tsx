import React from "react";

type HeaderProps = {
  name: string;
  photoUrl: string;
  bio: string;
  role: string;
};

export default function Header({ name, photoUrl, bio, role }: HeaderProps) {
  return (
    <>
      <img
        className="mb-3 h-52 w-52 rounded-full"
        src={photoUrl}
        alt="Profile Picture"
      />
      <h2 className="m-3 leading-5 text-4xl font-bold">{name}</h2>
      <h3 className="m-3 text-center text-2xl">{role}</h3>
      <h3 className="mb-5 text-center text-2xl">{bio}</h3>
    </>
  );
}

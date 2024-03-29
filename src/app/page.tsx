"use client"
import { signOut } from "next-auth/react";

export default function Home() {
  return (
    <main>
      <p>Hi</p>
      <button onClick={() => signOut()}>Logout</button>
    </main>
  );
}

"use client"

import Navbar from "./components/navbar";
import { usePathname } from 'next/navigation'


export default function Home() {
  const pathname = usePathname();
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar pathUrl={pathname} />
    </main>
  );
}

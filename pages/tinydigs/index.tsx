import Image from "next/image";
import { Inter } from "next/font/google";
import { Tinydigs } from "@/components/app/tinydigs";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
      <div className="text-center">
        <h1 className="text-3xl">Welcome to Tiny Digs</h1>
        <p className="text-slate-600">
          Talk with Pam to learn more about Tiny Digs and answer any questions
          you may have. <br />
          Please have your mic and speakers on.
        </p>
      </div>
      <Tinydigs />
    </main>
  );
}

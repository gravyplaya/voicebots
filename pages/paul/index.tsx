import Image from "next/image";
import { Inter } from "next/font/google";
import { Paul } from "@/components/app/paul";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
      <div className="text-center">
        <h1 className="text-3xl">Welcome to Broadway Show Assistant</h1>
        <p className="text-slate-600">
          Talk with Paul to explore upcoming shows and book tickets. <br />
          Please have your mic and speakers on.
        </p>
      </div>
      <Paul />
    </main>
  );
}

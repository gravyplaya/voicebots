import Image from "next/image";
import { Inter } from "next/font/google";
import { Assistant } from "@/components/app/assistant";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-12 ${inter.className}`}
    >
      <div className="text-center">
        <h1 className="text-3xl">Welcome to Tavonni Assistant</h1>
        <p className="text-slate-600">
          Talk with Geoffrey to learn more about our services and book a
          consultation. <br />
          Please have your mic and speakers on.
        </p>
      </div>
      <Assistant assistantName="geoffrey" />
      {/* update above to pass in the assistant object dynamically
          then as the user fills in the minimum fields you can do a live preview.
          save the assistant data as json in the db for later use.
          Charge per minute and for so many assistants.
      */}
    </main>
  );
}

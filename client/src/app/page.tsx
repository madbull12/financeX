import Image from "next/image";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import FinancialRecordForm from "~/components/financial-record-form";
import WelcomeText from "~/components/welcome-text";
export default function Home() {
  return (
    <main className="items-center p-4 justify-center ">
      <WelcomeText />
      <FinancialRecordForm />
    </main>
  );
}

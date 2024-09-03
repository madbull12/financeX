import Image from "next/image";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import FinancialRecordForm from "~/components/financial-record-form";
import WelcomeText from "~/components/welcome-text";
import FinancialRecordTable from "~/components/financial-record-table";
import { currentUser } from "@clerk/nextjs/server";

const getRecords = async(userId:string) => {
  const data = await fetch(`http://localhost:5000/api/financial-records/${userId}`);
  return data.json();
}

export default async function Home() {
  const user = await currentUser();
  const records = await getRecords(user?.id as string);
  console.log(records)
  return (
    <main className="items-center p-4 justify-center ">
      <WelcomeText />
      <FinancialRecordForm />
      <FinancialRecordTable />
    </main>
  );
}

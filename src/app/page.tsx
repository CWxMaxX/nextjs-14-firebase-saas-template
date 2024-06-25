import Image from "next/image";
import Link from "next/link";
import { Button } from "rsuite";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-slate-200 flex-col items-center justify-between p-24">
      <Link href='/auth/login'>
      <Button appearance="primary" >Login</Button>
      </Link>
      <Link href='/auth/signup'>
      <Button appearance="primary" >Sign Up</Button>
      </Link>
    </main>
  );
}

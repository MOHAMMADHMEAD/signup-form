import Link from "next/link";
import Signup from "@/components/signup";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center p-4">
            <Signup/>
        </main>
    )
}
import "../globals.css"
import {UserProvider} from "@/context/user";

// @ts-ignore
export default function App({Component, pageProps}) {
    return <UserProvider>
        <main className="flex justify-center min-h-screen flex-col items-center p-4"><Component {...pageProps} /></main>
    </UserProvider>;
}
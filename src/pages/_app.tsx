import "../globals.css"
import {DataProvider} from "@/context/signup";

// @ts-ignore
export default function App({Component, pageProps}) {
    return <DataProvider><Component {...pageProps} /></DataProvider>;
}
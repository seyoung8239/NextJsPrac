import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

interface iProps {
    name: string;
}
export default function Home({ name }: iProps) {
    console.log(name);
    return (
        <>
            <h1 className={inter.className}>Hello Next JS</h1>
            <h2>my name is {name} </h2>
            <Link href='/posts/1'>Posts</Link>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch("http://localhost:3000/api/hello");
    const obj = await res.json();

    return {
        props: {
            name: obj.name,
        },
    };
}

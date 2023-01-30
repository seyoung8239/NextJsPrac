import React from "react";

interface Post {
    id: number;
    content: string;
}

const Posts = ({ posts }: { posts: Post[] }) => {
    if (!posts) return <>none</>;
    return (
        <>
            {posts.map((p) => (
                <>
                    <h3>{p.id}</h3>
                    <h3>{p.content}</h3>
                </>
            ))}
        </>
    );
};

export async function getStaticPaths() {
    const res = await fetch("localhost:3000/api/posts");
    const posts = await res.json();

    const paths = posts.map((p: any) => ({
        params: { id: String(p.id) },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
    const res = await fetch(`localhost:3000/api/posts/${params}`);
    console.log(res);
    const post = await res.json();
    // console.log(params);

    return {
        props: {
            post,
        },
    };
}

export default Posts;

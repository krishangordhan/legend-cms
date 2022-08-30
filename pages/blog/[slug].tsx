import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"

import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

import { serialize } from 'next-mdx-remote/serialize'

import {MDXRemote, MDXRemoteSerializeResult} from 'next-mdx-remote'
import BlogHeaderComponent from "../../components/BlogHeader.component";

import typescript from 'highlight.js/lib/languages/typescript'

import 'highlight.js/styles/vs2015.css'
import hljs from "highlight.js";
import { useEffect } from "react";

hljs.registerLanguage('typescript', typescript)

const components ={
    BlogHeaderComponent,
}

export default function Article({source,}: InferGetStaticPropsType<typeof getStaticProps>) {
    useEffect(() => {
        hljs.highlightAll();
    }, [])
    return (
        <div style= {{width: '600px', margin: 'auto'}}>
            <MDXRemote {...source} components = {components}/>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const articlesDirectory = path.join('articles');

    const files = fs.readdirSync(articlesDirectory);

    const paths = files.map((fileName: string) => ({
        params: {
            slug: fileName.replace('.mdx', '')
        }
    }))

    return {
        paths,
        fallback: false, // it should never hit this we want a 404 page so we know we fucked up.
    }
}

type Params = {
    [param: string]: any;
}

export const getStaticProps: GetStaticProps<Params> = async ({ params: {slug}}: Params) => {
    const article = fs.readFileSync(path.join('articles', slug + '.mdx'));

    const {data: metaData, content} = matter(article);

    const mdxSource = await serialize(content, { scope: metaData });
    
    return {
        props: {source: mdxSource }
    }
}
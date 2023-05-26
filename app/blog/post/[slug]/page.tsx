import { getPost, urlFor } from '@/sanity/utils';
import { Metadata } from 'next';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Code from '@/components/Code';
import Link from 'next/link';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="leading-7 [&:not(:first-child)]:mt-6">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    'strike-through': ({ children }) => (
      <del className="line-through text-gray-500">{children}</del>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ value, children }) => {
      return (
        <Link
          className="ont-medium text-primary underline underline-offset-4"
          href={value?.href}
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    code: ({ value }) => (
      <Code language={value.language || 'javascript'} code={value.code} />
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ol>
    ),
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);

  const coverImage = urlFor(post.coverImage).format('jpg').width(1200).height(630).url();

  return {
    metadataBase: new URL(
      process.env.NODE_ENV === 'production'
        ? 'https://jaycedotbin.me/'
        : 'http://localhost:3000'
    ),
    title: post.title,
    description: post.exerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.exerpt,
      images: [coverImage],
    },
  };
}

export default async function Post({ params }: Props) {
  const post = await getPost(params.slug);

  return (
    <main className="max-w-prose mx-auto my-4">
      <header className="space-y-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {post.title}
        </h1>
      </header>
      <article>
        <PortableText components={components} value={post.content} />
      </article>
    </main>
  );
}

import { PortableTextComponents } from '@portabletext/react';
import Code from '@/components/Code';
import Link from 'next/link';

export const components: PortableTextComponents = {
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
import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';

export default function Layout({ children, frontMatter }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>
          {`${frontMatter.title} | Free Code Camp Montevideo` ||
            'Free Code Camp Montevideo'}
        </title>
      </Head>

      <header className="mt-10">
        <h1 className="text-5xl text-center mb-6">{frontMatter.title}</h1>
      </header>

      <article className="container mx-auto prose lg:prose-xl py-10">
        {frontMatter.image ? <img src={frontMatter.image} /> : null}
        <MDXProvider components={components}>{children}</MDXProvider>
      </article>
    </>
  );
}

const components = {
  img: (props) => <img className="mt-4 lg:mt-6" {...props} />,
};

import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';

const root = process.cwd();

export default function BlogPost({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource);

  return (
    <>
      <Head>
        <title>
          {`${frontMatter.title} | Free Code Camp Montevideo` ||
            'Free Code Camp Montevideo'}
        </title>
      </Head>

      <header className="mt-10 mx-auto prose lg:prose-xl">
        <h1 className="text-5xl mb-6">{frontMatter.title}</h1>
      </header>

      <article className="container mx-auto prose lg:prose-xl py-10">
        {frontMatter.image ? <img src={frontMatter.image} /> : null}
        {content}
      </article>
    </>
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: fs.readdirSync(path.join(root, 'content')).map((p) => {
      return {
        params: {
          slug: p.replace(/\.mdx/, ''),
        },
      };
    }),
  };
}

export async function getStaticProps({ params }) {
  const source = fs.readFileSync(
    path.join(root, 'content', `${params.slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content);

  // Return not found if the environment is production and the post is draft
  if (process.env.NODE_ENV === 'production' && data.draft) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mdxSource,
      frontMatter: data,
    },
  };
}
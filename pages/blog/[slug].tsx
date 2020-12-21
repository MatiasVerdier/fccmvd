import React from 'react';
import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import remarkEmbedder from '@remark-embedder/core';
import youtubeTransformer from '../../lib/youtube-transformer';
import { getAuthor } from '@/utils/authors';

const root = process.cwd();

export default function BlogPost({ mdxSource, frontMatter }) {
  React.useEffect(() => {
    import('lite-youtube-embed/src/lite-yt-embed');
  }, []);

  const content = hydrate(mdxSource);
  const authorData = getAuthor(frontMatter.author);

  return (
    <div className="px-4">
      <NextSeo
        title={frontMatter.title}
        titleTemplate="%s | Free Code Camp Montevideo"
        description={frontMatter.description}
        canonical={frontMatter.slug}
        openGraph={{
          site_name: 'FCCMontevideo.com',
          locale: 'es_UY',
          url: frontMatter.slug,
          title: frontMatter.title,
          description: frontMatter.description,
          type: 'article',
          article: {
            publishedTime: frontMatter.date,
            authors: [authorData.name],
          },
          images: [
            {
              url: `https://fccmontevideo.com${frontMatter.image}`,
              width: 800,
              height: 600,
              alt: 'Article cover image',
            },
          ],
        }}
        twitter={{
          handle: `@${authorData.twitter || 'FccMontevideo'}`,
          site: '@FccMontevideo',
          cardType: 'summary_large_image',
        }}
      />

      <ArticleJsonLd
        url={frontMatter.slug}
        title={frontMatter.title}
        images={[`https://fccmontevideo.com${frontMatter.image}`]}
        datePublished={frontMatter.date}
        authorName={[authorData.name]}
        publisherName="FreeCodeCamp Montevideo"
        publisherLogo={`https://fccmontevideo.com/favicon.svg`}
        description={frontMatter.description}
      />

      <header className="mt-10 mx-auto prose lg:prose-xl">
        <h1 className="text-5xl mb-6">{frontMatter.title}</h1>
      </header>

      <article className="container mx-auto prose prose-indigo lg:prose-xl py-10">
        {frontMatter.image ? <img src={frontMatter.image} /> : null}
        {content}
      </article>
    </div>
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
  const { slug } = params;
  const source = fs.readFileSync(
    path.join(root, 'content', `${slug}.mdx`),
    'utf8'
  );
  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, {
    mdxOptions: {
      remarkPlugins: [
        [
          remarkEmbedder,
          {
            transformers: [[youtubeTransformer]],
          },
        ],
      ],
    },
  });

  // Return not found if the environment is production and the post is draft
  if (process.env.NODE_ENV === 'production' && data.draft) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      mdxSource,
      frontMatter: { ...data, slug: `https://fccmontevideo.com/blog/${slug}` },
    },
  };
}

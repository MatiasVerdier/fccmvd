import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getPosts } from '@/utils/posts';

export default function Blog({ posts }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="divide-y divide-gray-200">
        <h1 className="text-5xl">Novedades</h1>

        <ul className="divide-y divide-gray-200">
          {posts.map((page) => (
            <li className="py-12" key={page.title}>
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                <dl>
                  <dt className="sr-only">Publicado</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500">
                    <time dateTime={page.date}>
                      {format(parseISO(page.date), 'dd/LL/yyyy')}
                    </time>
                  </dd>
                </dl>
                <div className="space-y-5 xl:col-span-3">
                  <div className="space-y-6">
                    <h2 className="text-2xl leading-8 font-bold tracking-tight">
                      <Link href={page.slug}>
                        <a>{page.title}</a>
                      </Link>
                    </h2>
                    <div className="prose max-w-none text-gray-500">
                      <p>{page.description}</p>
                    </div>
                  </div>
                  <div className="text-base leading-6 font-medium">
                    <Link href={page.slug}>
                      <a
                        className="text-indigo-500 hover:text-indigo-600"
                        aria-label={`Read ${page.title}`}
                      >
                        Leer mas →
                      </a>
                    </Link>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
}

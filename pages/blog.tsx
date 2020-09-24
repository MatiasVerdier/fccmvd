import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getPosts } from '@/utils/posts';

export default function Blog() {
  const postList = getPosts();

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl">Blog</h1>

      <ul>
        {postList.map((page) => (
          <li key={page.title}>
            <Link href={page.__resourcePath}>
              <a>
                {format(parseISO(page.date), 'dd/LL/yyyy')} - {page.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

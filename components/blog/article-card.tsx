import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getAuthor } from '@/utils/authors';

export default function ArticleCard({
  image,
  title,
  description,
  author,
  date,
  __resourcePath,
}) {
  const slug = __resourcePath.replace(/\.mdx$/, '');
  const authorData = getAuthor(author);

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={image} alt="" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm leading-5 font-medium text-indigo-600">
            <a href="#" className="hover:underline">
              Blog
            </a>
          </p>
          <Link href={slug}>
            <a className="block">
              <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                {title}
              </h3>
              <p className="mt-3 text-base leading-6 text-gray-500">
                {description}
              </p>
            </a>
          </Link>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            {authorData && authorData.avatar ? (
              <a href="#">
                <img
                  className="h-10 w-10 rounded-full"
                  src={authorData.avatar}
                  alt=""
                />
              </a>
            ) : null}
          </div>
          <div className="ml-3">
            <p className="text-sm leading-5 font-medium text-gray-900">
              <a href="#" className="hover:underline">
                {authorData ? authorData.name : author}
              </a>
            </p>
            <div className="flex text-sm leading-5 text-gray-500">
              <span>{format(parseISO(date), 'dd/LL/yyyy')}</span>
              <span className="mx-1">&middot;</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

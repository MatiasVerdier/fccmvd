import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { getAuthor } from '@/utils/authors';
import Image from 'next/image'

export default function ArticleCard({
  image,
  title,
  description,
  author,
  date,
  slug,
  tags,
}) {
  const authorData = getAuthor(author);

  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0 h-48 w-full relative">
        <Image src={image} alt="Post image" layout="fill" objectFit="cover" />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <div className="text-sm leading-5 font-medium text-indigo-600">
            {tags && tags.length ? (
              <div className="flex space-x-3">
                {tags.map((tag) => (
                  <div key={tag} className="text-indigo-500">
                    {tag}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
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
                <Image
                  className="rounded-full"
                  width="40"
                  height="40"
                  src={authorData.avatar}
                  alt={authorData.name}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Link from 'next/link';
import cn from 'classnames';
import { useRouter } from 'next/router';

export default function NavigationLink({ href, isMobile = false, children, ...props }) {
  const { asPath } = useRouter()
  const isActive = asPath === href || asPath === props.as

  return (
    <Link href={href} {...props}>
      <a
        className={cn({
          'px-3 py-2 rounded-md font-medium hover:text-white hover:bg-gray-700 focus:outline-none transition duration-150 ease-in-out': true,
          'ml-4 text-sm leading-5 ': !isMobile,
          'mt-1 block text-base': isMobile,
          'text-gray-300': !isActive,
          'text-white bg-gray-900': isActive,
        })}
      >
        {children}
      </a>
    </Link>
  );
}

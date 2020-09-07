import Link from 'next/link';
import cn from 'classnames';

export default function NavigationLink({ href, isMobile = false, children }) {
  return (
    <Link href={href}>
      <a
        className={cn({
          'ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out': !isMobile,
          'mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out': isMobile,
        })}
      >
        {children}
      </a>
    </Link>
  );
}

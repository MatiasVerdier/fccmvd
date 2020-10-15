import { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import NavigationLink from '@/components/navigation-link';
import Logo from '@/components/logo';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Logo />
            <Link href="/">
              <a>
                <h1 className="hidden md:block text-white ml-4">
                  Free Code Camp Montevideo
                </h1>
              </a>
            </Link>
          </div>

          <div className="flex">
            <div className="-ml-2 mr-2 flex items-center md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className={cn('h-6 w-6', { hidden: isOpen })}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className={cn('h-6 w-6', { hidden: !isOpen })}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden md:ml-6 md:flex md:items-center">
              <NavigationLink href="/">Home</NavigationLink>
              <NavigationLink href="/about">Nosotros</NavigationLink>
              <NavigationLink href="/blog">Blog</NavigationLink>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile links */}
      <div
        className={cn('md:hidden', {
          hidden: !isOpen,
          block: isOpen,
        })}
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <NavigationLink href="/" isMobile>
            Home
          </NavigationLink>
          <NavigationLink href="/about" isMobile>
            Nosotros
          </NavigationLink>
          <NavigationLink href="/blog" isMobile>
            Blog
          </NavigationLink>
        </div>
      </div>
    </nav>
  );
}

export interface HeroProps {
  description: string;
  cta: {
    text: string;
    link: string;
  };
}

export default function Hero({ description, cta }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full">
        <div className="relative h-full max-w-screen-xl mx-auto">
          <svg
            className="absolute transform right-full translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute transform left-full -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <main className="max-w-screen-xl px-4 mx-auto mt-10 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              FreeCodeCamp
              <br className="xl:hidden" />
              <span className="text-indigo-600">Montevideo</span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {description}
            </p>
            <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href={cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
                >
                  {cta.text}
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

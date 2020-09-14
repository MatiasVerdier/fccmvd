interface FrontMatter {
  __resourcePath: string;
  title: string;
  date: string;
  description: string;
  author: string;
  image: string;
  [key: string]: any;
}

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
  export const frontMatter: FrontMatter[];
}

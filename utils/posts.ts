import { frontMatter as allPosts } from '../pages/blog/**/*.mdx';
import { compareDesc, parseISO } from 'date-fns';

const sortedPosts = allPosts
  .map((p) => {
    return {
      ...p,
      __resourcePath: p.__resourcePath.replace(/\.mdx$/, ''),
    };
  })
  .sort((p1, p2) => {
    return compareDesc(parseISO(p1.date), parseISO(p2.date));
  });

export const getPosts = (limit?: number) => {
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
};

export const getPostsByAuthor = (author) => {
  return sortedPosts.filter((p) => p.author === author);
};

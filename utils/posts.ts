import { compareDesc, parseISO } from 'date-fns';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';

const root = process.cwd();
const posts = [];

fs.readdirSync(path.join(root, 'content')).forEach((file) => {
  const source = fs.readFileSync(path.join(root, 'content', file), 'utf8');
  const { data, content } = matter(source);

  if (process.env.NODE_ENV !== 'production' || !data.draft) {
    posts.push({
      ...data,
      content,
      slug: `/blog/${file.replace(/\.mdx/, '')}`,
    });
  }
});

const sortedPosts = posts.sort((p1, p2) => {
  return compareDesc(parseISO(p1.date), parseISO(p2.date));
});

export const getPosts = (limit?: number) => {
  return limit ? sortedPosts.slice(0, limit) : sortedPosts;
};

export const getPostsByAuthor = (author) => {
  return sortedPosts.filter((p) => p.author === author);
};

import Head from 'next/head';
import Hero from '@/components/hero';
import Featured from '@/components/blog/featured';
import { getPosts } from '@/utils/posts';

export default function Home() {
  const posts = getPosts(3);
  return (
    <div>
      <Hero />

      <Featured posts={posts} />
    </div>
  );
}

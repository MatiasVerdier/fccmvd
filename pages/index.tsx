import Hero from '@/components/hero';
import Featured from '@/components/blog/featured';
import { getPosts } from '@/utils/posts';

export default function Home({ posts }) {
  return (
    <div>
      <Hero />

      <Featured posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const posts = getPosts(3);

  return {
    props: {
      posts,
    },
  };
}

import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { usePlugin } from 'tinacms';
import { useGithubJsonForm } from 'react-tinacms-github';
import Hero from '@/components/hero';
import Featured from '@/components/blog/featured';
import { getPosts } from '@/utils/posts';

export default function Home({ posts, file }) {
  const formOptions = {
    label: 'Home Page',
    fields: [
      {
        name: 'hero.description',
        component: 'text',
      },
      {
        name: 'hero.cta',
        component: 'group',
        fields: [
          {
            name: 'text',
            component: 'text',
          },
          {
            name: 'link',
            component: 'text',
          },
        ],
      },
    ],
  };

  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);

  return (
    <div>
      <Hero {...data.hero} />

      <Featured posts={posts} />
    </div>
  );
}

export async function getStaticProps({ preview, previewData }) {
  const posts = getPosts(3);

  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      posts,
      fileRelativePath: 'content/home.json',
      parse: parseJson,
    });
  }

  return {
    props: {
      posts,
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'content/home.json',
        data: (await import('../content/home.json')).default,
      },
    },
  };
}

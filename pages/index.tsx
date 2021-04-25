import { getGithubPreviewProps, parseJson } from 'next-tinacms-github';
import { usePlugin } from 'tinacms';
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from 'react-tinacms-github';
import Hero from '@/components/hero';
import Featured from '@/components/blog/featured';
import { getPosts } from '@/utils/posts';

export default function Home({ posts, file }) {
  const formOptions = {
    label: 'Home Page',
    fields: [
      { name: '_', component: () => <h3>Hero Section</h3> },
      {
        name: 'hero.description',
        label: 'Description',
        component: 'textarea',
      },
      {
        name: 'hero.cta',
        label: 'Call to action button',
        component: 'group',
        fields: [
          {
            name: 'text',
            label: 'Button text',
            component: 'text',
          },
          {
            name: 'link',
            label: 'Button link',
            component: 'text',
          },
        ],
      },
    ],
  };

  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);
  useGithubToolbarPlugins();

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
    const githubProps = await getGithubPreviewProps({
      ...previewData,
      fileRelativePath: 'data/home.json',
      parse: parseJson,
    });

    return {
      props: {
        posts,
        ...githubProps.props,
      },
    };
  }

  return {
    props: {
      posts,
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: 'data/home.json',
        data: (await import('../data/home.json')).default,
      },
    },
  };
}

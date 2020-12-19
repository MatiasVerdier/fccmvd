import type { Transformer } from '@remark-embedder/core';

const youTubeRegex = new RegExp(
  /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|\?v=)([^#&?]*).*/
);

const transformer: Transformer = {
  name: '@matiasvj/transformer-lite-youtube',

  shouldTransform(url) {
    const [fullUrl, , videoId] = url.match(youTubeRegex);
    return fullUrl === url && !!videoId;
  },

  getHTML(url) {
    const [, , videoId] = url.match(youTubeRegex);

    return `<div class="mb-4">
      <lite-youtube videoid="${videoId}" style="background-image: url('https://i.ytimg.com/vi/${videoId}/hqdefault.jpg');">
        <button type="button" class="lty-playbtn"></button>
      </lite-youtube>
    </div>`;
  },
};

export default transformer;

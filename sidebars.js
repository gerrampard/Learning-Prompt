/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  welcome: [
    'welcome',
    {
      type: 'category',
      label: '💡 Insights and Sharing',
      link: {
        type: 'generated-index',
        description: 'I will mainly share my personal insights and learning.',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'insight',
        },
      ],
    },
    {
      type: 'category',
      label: '📚 Recommendations',
      link: {
        type: 'generated-index',
        description:
          'A collection of information and products that I personally think are good.',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'recommend',
        },
      ],
    },
    'thank-you',
  ],
  ai101: [
    'ai-101',
    {
      type: 'autogenerated',
      dirName: 'ai-101',
    },
  ],
  chatGPT: [
    'chatgpt-learning-path',
    {
      type: 'category',
      label: '😎 Fundamentals',
      link: {
        type: 'generated-index',
        description:
          "If you don't know much about AI and Prompt Engineering, it is recommended that you start with the Fundamentals. If you already know the basics, you can skip to the advanced chapter.",
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'chatGPT/tutorial-basics',
        },
      ],
    },
    {
      type: 'category',
      label: '🚀 Advanced',
      link: {
        type: 'generated-index',
        description:
          "The advanced chapter is relatively difficult, so if you don't know much about AI and PE, it is recommended to finish the basic chapter first.",
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'chatGPT/tutorial-extras',
        },
      ],
    },
    {
      type: 'category',
      label: '🗒️ Tips',
      link: {
        type: 'generated-index',
        description:
          "All prompt tips are summarized here for your convenience. If you've already read the Fundamentals and Advanced sections, you'll only need to start with tip 9.",
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'chatGPT/tutorial-tips',
        },
      ],
    },
  ],
  midjourney: [
    'midjourney-learning-path',
    {
      type: 'autogenerated',
      dirName: 'midjourney',
    },
  ],
}

module.exports = sidebars

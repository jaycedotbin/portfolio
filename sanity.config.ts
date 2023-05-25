import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { codeInput } from '@sanity/code-input';
import schemas from './sanity/schemas';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

const config = defineConfig({
  projectId,
  dataset,
  title: 'Portfolio',
  basePath: '/studio',
  useCdn: false,
  schema: { types: schemas },
  plugins: [
    codeInput({
      codeModes: [
        {
          name: 'cpp',
          loader: () => import('@codemirror/lang-cpp').then(({ cpp }) => cpp()),
        },
      ],
    }),
    deskTool(),
    visionTool(),
  ],
});

export default config;

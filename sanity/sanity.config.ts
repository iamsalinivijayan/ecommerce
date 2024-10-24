import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Curated Cart',

  projectId: 'zl2eg24w',
  dataset: 'ecommerce',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

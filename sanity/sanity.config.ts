import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Curated Cart',

  projectId: 'zl2eg24w',
  dataset: 'ecommerce',
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})

import author from './schemaTypes/author'
import blockContent from './schemaTypes/blockContent'
import _case from './schemaTypes/case'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import profile from './schemaTypes/profile'

import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, _case, profile]
}

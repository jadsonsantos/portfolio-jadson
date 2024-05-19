import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

import { ClientConfig } from '@sanity/client'

const config: ClientConfig = {
  apiVersion,
  dataset,
  projectId,
  useCdn
}

const client = createClient(config)

export default client

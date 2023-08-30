import { Hono } from 'hono'
import { env } from 'hono/adapter'
import { basicAuth } from 'hono/basic-auth'
import { secureHeaders } from 'hono/secure-headers'
import type { AppLoadContext } from '@remix-run/cloudflare'
import { createRequestHandler } from '@remix-run/cloudflare'
import * as build from './build'

// @ts-ignore
const handleRemixRequest = createRequestHandler(build, process.env.NODE_ENV)

const app = new Hono()

app.use(
  '*',
  basicAuth({
    username: 'hono',
    password: 'acoolproject',
  })
)
app.use('*', secureHeaders())

app.get('*', async (c) => {
  const loadContext: AppLoadContext = { env: env(c) }
  return await handleRemixRequest(c.req.raw, loadContext)
})

export default app
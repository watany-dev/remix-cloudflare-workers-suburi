import { Hono } from 'hono'
import { basicAuth } from 'hono/basic-auth'
import { secureHeaders } from 'hono/secure-headers'
import { createRequestHandler } from '@remix-run/cloudflare'
import * as build from './build'

// @ts-ignore
const remixHandler = createRequestHandler(build, process.env.NODE_ENV)

const app = new Hono()

app.use(
  '*',
  basicAuth({
    username: 'hono',
    password: 'acoolproject',
  })
)
app.use('*', secureHeaders())

app.mount('/remix/', remixHandler)


export default app
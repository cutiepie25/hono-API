import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono!'))

app.get('/api/hello', (c) => c.json({ message: 'Hola desde Hono en Cloudflare Workers' }))

export default app
